import {
  collection,
  getDocs,
  getDoc,
  doc,
  DocumentReference,
  DocumentData,
  query,
  where,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import api from "./instance";
import Bouquet from "../types/bouquet";
import Category from "../types/category";
import News from "../types/news";
import {
  createBouquetFromDocument,
  createCategoryFromDocument,
  createNewsFromDocument,
} from "../utils/dataTransforms";

interface NewsData {
  newsList: News[];
  totalNewsCount: number;
}

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

  fetchNews: (floristName: string, lastVisibleId?: string) => Promise<NewsData>;

  fetchStaticInfo: (
    floristName: string,
    pageName: "about" | "contacts"
  ) => Promise<DocumentData>;
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

  fetchNews: async (floristName, lastVisibleId) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const lastVisibleIdDoc = lastVisibleId
      ? doc(api.provider().db, `florists/${floristName}/news/`, lastVisibleId)
      : undefined;
    const lastVisibleIdDocRef = lastVisibleIdDoc
      ? await getDoc(lastVisibleIdDoc)
      : undefined;

    const newsCol = lastVisibleIdDocRef
      ? query(
          collection(floristDoc, "news"),
          orderBy("date", "desc"),
          startAfter(lastVisibleIdDocRef),
          limit(3)
        )
      : query(
          collection(floristDoc, "news"),
          orderBy("date", "desc"),
          limit(3)
        );
    const newsSnapshot = await getDocs(newsCol);
    const newsList = newsSnapshot.docs.map((doc) =>
      createNewsFromDocument({ ...doc.data(), id: doc.id })
    );

    const newsCollectionRef = collection(floristDoc, "news");
    const totalNewsSnapshot = await getDocs(newsCollectionRef);
    const totalNewsCount = totalNewsSnapshot.docs.length;

    return { newsList, totalNewsCount };
  },

  fetchStaticInfo: async (floristName, pageName) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const staticDoc = doc(floristDoc, "info", pageName);
    const staticSnapshot = await getDoc(staticDoc);

    if (staticSnapshot.exists()) {
      return staticSnapshot.data();
    } else {
      throw new Error("static data not found");
    }
  },
};

export default floristApi;
