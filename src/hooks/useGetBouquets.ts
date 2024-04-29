import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";

export function useGetBouquets(
  florist: string = "",
  bouquetIds?: Bouquet["id"][]
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);

  useEffect(() => {
    if (florist == "") return;
    const shouldFetchBouquets = () => {
      return (
        bouquetIds === null ||
        bouquetIds === undefined ||
        (Array.isArray(bouquetIds) && bouquetIds.length > 0)
      );
    };

    if (shouldFetchBouquets()) {
      setIsLoading(true);

      floristApi
        .fetchBouquets(florist, bouquetIds)
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
    }
  }, [florist, bouquetIds]);

  return {
    bouquets,
    isLoading,
    error,
  };
}
