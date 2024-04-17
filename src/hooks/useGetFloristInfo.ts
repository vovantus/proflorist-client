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

        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e.name);
      });
  }, []);

  return {
    floristInfo,
    isLoading,
    error,
  };
}
