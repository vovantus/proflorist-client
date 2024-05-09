import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import News from "../types/news";

export function useGetNews(florist: string = "") {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    if (florist == "") return;
    setIsLoading(true);
    floristApi
      .fetchNews(florist)
      .then((news) => {
        setNews(news);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [florist]);

  return {
    news,
    isLoading,
    error,
  };
}
