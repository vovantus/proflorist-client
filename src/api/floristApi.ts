import {
  collection,
  getDocs,
  getDoc,
  doc,
  DocumentReference,
  DocumentData,
} from "firebase/firestore/lite";
import api from "./instance";
import { Bouquet } from "../types/bouquet";
import { createBouquetFromDocument } from "../utils/dataTransforms";

// ASK 16 04 2024 тут про дженерики спросить(по просьбе Сани)

interface Api {
  fetchFlorist: (
    floristName?: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName?: string) => Promise<DocumentData | undefined>;
  fetchBouquets: (floristName?: string) => Promise<Bouquet[]>;
}

const floristApi: Api = {
  fetchFlorist: async (floristName = "rozaexpress") => {
    const floristDoc = doc(api.provider().db, "florists", floristName);
    return floristDoc;
  },

  fetchFloristInfo: async (floristName = "rozaexpress") => {
    const floristRef = await floristApi.fetchFlorist(floristName);
    const floristSnap = await getDoc(floristRef);

    if (floristSnap.exists()) {
      const floristInfo = floristSnap.data();
      return floristInfo;
    } else {
      throw new Error("florist not found");
    }
  },

  fetchBouquets: async (floristName = "rozaexpress") => {
    const floristDoc = await floristApi.fetchFlorist(floristName);
    const bouquetsCol = collection(floristDoc, "bouquets");
    const bouquetsSnapshot = await getDocs(bouquetsCol);
    const bouquetList = bouquetsSnapshot.docs.map((doc) =>
      createBouquetFromDocument(doc.data())
    );
    return bouquetList;
  },
};

export default floristApi;
