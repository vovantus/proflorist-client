import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";

export function useGetFloristInfo(florist?: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [floristInfo, setFloristInfos] = useState({});

  useEffect(() => {
    floristApi
      .fetchFloristInfo(florist)
      .then((data) => {
        if (data) {
          setFloristInfos(data);
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e.name);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    floristInfo,
    isLoading,
    error,
  };
}
