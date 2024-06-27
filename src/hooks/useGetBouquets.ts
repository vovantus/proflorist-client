import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";

export function useGetBouquets(
  florist: string = "",
  bouquetIds: Bouquet["id"][]
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);


  useEffect(() => {
    if (!florist || bouquetIds.length === 0) {
      setIsLoading(false);
      return;
    }

    floristApi
      .fetchBouquetsById(florist, bouquetIds)
      .then((bouqs) => {
        setBouquets(bouqs);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [florist, bouquetIds]);

  return {
    bouquets,
    isLoading,
    error,
  };
}
