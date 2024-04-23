import { useEffect, useState } from 'react';
import floristApi from "../api/floristApi";
import Bouquet from "../types/bouquet";

export function useGetBouquets(florist?: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [bouquets, setBouquets] = useState<Bouquet[]>([]);

  useEffect(() => {
    floristApi
      .fetchBouquets(florist)
      .then((bouqs) => {
        setBouquets(bouqs);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e.name);
      });
  }, [florist]);

  return {
    bouquets,
    isLoading,
    error,
  };
}


