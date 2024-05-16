import { useEffect, useState } from "react";
import About from "../types/about";
import floristApi from "../api/floristApi";

export default function useGetStaticInfo(
  florist: string = "",
  pageName: string
) {
  const [info, setInfo] = useState<About | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    floristApi
      .fetchStaticInfo(florist, pageName)
      .then((data) => {
        if (data) setInfo(data);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { info, isLoading, error };
}
