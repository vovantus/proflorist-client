import {
  collection,
  getDocs,
  getDoc,
  doc,
  DocumentReference,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import api from "./instance";
import Bouquet from "../types/bouquet";
import Category from "../types/category";
import News from "../types/news";
import About from "../types/about";
import {
  createAboutFromDocument,
  createBouquetFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
} from "../utils/dataTransforms";

interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchBouquets: (
    floristName: string,
    bouquetIds?: Bouquet["id"][]
  ) => Promise<Bouquet[]>;

  fetchCategories: (floristName: string) => Promise<Category[]>;

  fetchCategoryBouquets: (
    floristName: string,
    categoryId: Category["id"]
  ) => Promise<Bouquet[]>;

  fetchNews: (floristName: string) => Promise<News[]>;

  fetchStaticInfo: (
    floristName: string,
    pageName: string
  ) => Promise<About | undefined>;
}

const floristApi: Api = {
  fetchFlorist: async (floristName) => {
    const floristDoc = doc(api.provider().db, "florists", floristName);
    return floristDoc;
  },

  fetchFloristInfo: async (floristName) => {
    const floristRef = await floristApi.fetchFlorist(floristName);
    const floristSnap = await getDoc(floristRef);

    if (floristSnap.exists()) {
      const floristInfo = floristSnap.data();
      return floristInfo;
    } else {
      throw new Error("florist not found");
    }
  },

  fetchBouquets: async (floristName, bouquetIds) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const bouquetsCol =
      Array.isArray(bouquetIds) && bouquetIds.length > 0
        ? query(
            collection(floristDoc, "bouquets"),
            where("__name__", "in", bouquetIds)
          )
        : collection(floristDoc, "bouquets");
    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );
    return bouquetList;
  },

  fetchCategories: async (floristName) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const categoriesCol = collection(floristDoc, "categories");
    const categoriesSnapshot = await getDocs(categoriesCol);
    const categoriestList = categoriesSnapshot.docs.map((doc) =>
      createCategoryFromDocument({ ...doc.data(), id: doc.id })
    );
    return categoriestList;
  },

  fetchCategoryBouquets: async (floristName, categoryId) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const bouquetsCol = query(
      collection(floristDoc, "bouquets"),
      where("categories", "array-contains", categoryId)
    );
    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );
    return bouquetList;
  },

  fetchNews: async (floristName) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const newsCol = collection(floristDoc, "news");
    const newsSnapshot = await getDocs(newsCol);
    const newsList = newsSnapshot.docs.map((doc) =>
      createNewsFromDocument({ ...doc.data(), id: doc.id })
    );
    return newsList;
  },

  fetchStaticInfo: async (floristName, pageName) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const staticDoc = doc(floristDoc, "info", pageName);
    const staticSnapshot = await getDoc(staticDoc);

    if (staticSnapshot.exists()) {
      const staticData = staticSnapshot.data();
      let staticInfo: About | undefined;
      switch (pageName) {
        case "about":
          staticInfo = createAboutFromDocument(staticData);
          break;
      }
      return staticInfo;
    } else {
      throw new Error("static data not found");
    }
  },
};

export default floristApi;
