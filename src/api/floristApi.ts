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
  QueryDocumentSnapshot,
  getCountFromServer,
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
  lastDoc: QueryDocumentSnapshot<DocumentData, DocumentData> | "";
}

interface BouquetsData {
  bouquetList: Bouquet[];
  totalBouquetsCount: number;
  lastBouquet: QueryDocumentSnapshot<DocumentData, DocumentData> | "";
}

interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchBouquetsById: (
    floristName: string,
    bouquetIds: Bouquet["id"][]
  ) => Promise<Bouquet[]>;

  fetchCategories: (floristName: string) => Promise<Category[]>;

  fetchBouquetsByCategory: (
    floristName: string,
    cursorDoc: QueryDocumentSnapshot<DocumentData, DocumentData> | "",
    categoryId?: Category["id"]
  ) => Promise<BouquetsData>;

  fetchNews: (
    floristName: string,
    cursorDoc: QueryDocumentSnapshot<DocumentData, DocumentData> | ""
  ) => Promise<NewsData>;

  fetchStaticInfo: (
    floristName: string,
    pageName: "about" | "contacts" | "delivery"
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

  fetchBouquetsById: async (floristName, bouquetIds) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const bouquetsCol = query(
      collection(floristDoc, "bouquets"),
      where("__name__", "in", bouquetIds)
    );
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

  fetchBouquetsByCategory: async (floristName, cursorDoc, categoryId) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    let bouquetsCol = query(collection(floristDoc, "bouquets"));
    if (categoryId) {
      bouquetsCol = query(
        bouquetsCol,
        where("categories", "array-contains", categoryId)
      );
    }

    const allBouquetsSnapshot = await getCountFromServer(bouquetsCol);
    const totalBouquetsCount = allBouquetsSnapshot.data().count;

    bouquetsCol = query(bouquetsCol, orderBy("name", "desc"));

    if (cursorDoc) bouquetsCol = query(bouquetsCol, startAfter(cursorDoc));

    bouquetsCol = query(bouquetsCol, limit(15));

    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument({ ...doc.data(), id: doc.id })
    );

    const lastBouquet =
      bouquetsSnapshot.docs.length > 0
        ? bouquetsSnapshot.docs[bouquetsSnapshot.docs.length - 1]
        : "";

    return { bouquetList, totalBouquetsCount, lastBouquet };
  },

  fetchNews: async (floristName, cursorDoc) => {
    const floristDoc = await floristApi.fetchFlorist(floristName);

    let newsCol = query(
      collection(floristDoc, "news"),
      orderBy("date", "desc")
    );

    if (cursorDoc) newsCol = query(newsCol, startAfter(cursorDoc));

    newsCol = query(newsCol, limit(3));

    const newsSnapshot = await getDocs(newsCol);
    const newsList = newsSnapshot.docs.map((doc) =>
      createNewsFromDocument({ ...doc.data(), id: doc.id })
    );

    const lastDoc =
      newsSnapshot.docs.length > 0
        ? newsSnapshot.docs[newsSnapshot.docs.length - 1]
        : "";

    const newsCollectionRef = collection(floristDoc, "news");
    const totalNewsSnapshot = await getCountFromServer(newsCollectionRef);
    const totalNewsCount = totalNewsSnapshot.data().count;

    return { newsList, totalNewsCount, lastDoc };
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
