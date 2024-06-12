import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";
import Category from "../types/category";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export function useGetCategoryBouquets(
  florist: string = "",
  categoryId: Category["id"] = ""
) {
  const [status, setStatus] = useState<"idle" | "loading" | "endReached">(
    "idle"
  );
  const [error, setError] = useState("");
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);
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
      .then(({ bouquetList, totalBouquetsCount, lastBouquet }) => {
        setBouquets(
          lastBouquetRef
            ? (oldBouqs) => [...oldBouqs, ...bouquetList]
            : bouquetList
        );

        setLastBouquetRef(lastBouquet);

        setStatus(
          bouquets.length + bouquetList.length >= totalBouquetsCount
            ? "endReached"
            : "idle"
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setStatus("idle");
      });
  }, [florist, categoryId, cursor, lastBouquetRef, bouquets.length]);

  const initiateUpdate = () => {
    if (status !== "idle") return;
    setCursor(lastBouquetRef);
  };

  return {
    bouquets,
    status,
    error,
    initiateUpdate,
  };
}
