import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";

export function useGetBouquets(florist: string, bouquetIds?: Bouquet["id"][]) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);

  useEffect(() => {
    if (florist)
      floristApi
        .fetchBouquets(florist, bouquetIds)
        .then((bouqs) => {
          setBouquets(bouqs);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
          setError(e.name);
        });
  }, [florist, bouquetIds]);

  return {
    bouquets,
    isLoading,
    error,
  };
}
