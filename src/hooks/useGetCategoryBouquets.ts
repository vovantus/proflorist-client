import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";
import Category from "../types/category";


export function useGetCategoryBouquets(
  florist: string = "",
  categoryId: Category["id"] = ""
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquets, setBouquet] = useState<Bouquet[]>([]);

  useEffect(() => {
    if (florist == "" || categoryId == "") return;
    setIsLoading(true);

    floristApi
      .fetchCategoryBouquets(florist, categoryId)
      .then((bouqs) => {
        setBouquet(bouqs);
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
    bouquets,
    isLoading,
    error,
  };
}
