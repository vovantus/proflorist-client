import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";
import Category from "../types/category";

//ASK стоит ли объединять хуки  useGetBouquets и useGetCategoryBouquets

export function useGetCategoryBouquets(
  florist: string,
  categoryId: Category["id"]
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquetIds, setBouquetIds] = useState<Bouquet["id"][]>([]);

  useEffect(() => {
    setIsLoading(true);

    floristApi
      .fetchCategoryBouquets(florist, categoryId)
      .then((bouqs) => {
        setBouquetIds(bouqs);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [florist, categoryId]);

  return {
    bouquetIds,
    isLoading,
    error,
  };
}
