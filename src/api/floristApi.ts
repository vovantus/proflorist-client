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
import { createBouquetFromDocument } from "../utils/dataTransforms";
// import { query, where } from "firebase/firestore";

interface Api {
  fetchFlorist: (
    floristName: string
  ) => Promise<DocumentReference<DocumentData, DocumentData>>;

  fetchFloristInfo: (floristName: string) => Promise<DocumentData | undefined>;

  fetchBouquets: (
    floristName: string,
    bouquetIds?: Bouquet["id"][]
  ) => Promise<Bouquet[]>;
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
};

export default floristApi;
