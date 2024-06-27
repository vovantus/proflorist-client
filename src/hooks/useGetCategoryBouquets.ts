import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";
import Category from "../types/category";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export function useGetCategoryBouquets(
  florist: string = "",
  categoryId: Category["id"] = ""
) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "endReached" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [newBouquets, setNewBouquets] = useState<Bouquet[]>([]);
  const [cursor, setCursor] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData> | ""
  >("");

  const [lastBouquetRef, setLastBouquetRef] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData> | ""
  >("");

  useEffect(() => {
    if (!florist) return;
    setStatus("loading");
    floristApi
      .fetchBouquetsByCategory(florist, cursor, categoryId)
      .then(({ bouquetList, lastBouquet }) => {
        setNewBouquets(bouquetList);
        setLastBouquetRef(lastBouquet);
        setStatus(lastBouquet ? "idle" : "endReached");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setStatus("error");
      });
  }, [florist, categoryId, cursor]);

  const initiateUpdate = () => {
    if (status !== "idle" || lastBouquetRef === "") return;
    setCursor(lastBouquetRef);
  };

  return {
    newBouquets,
    status,
    error,
    initiateUpdate,
  };
}
