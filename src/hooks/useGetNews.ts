import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import News from "../types/news";

export function useGetNews(florist: string = "") {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [news, setNews] = useState<News[]>([]);
  const [lastNewsId, setLastNewsId] = useState("");

  const fetchUpdate = () => {
    setLastNewsId(news[news.length - 1].id);
  };

  useEffect(() => {
    if (florist == "") return;
    console.log("useEffect", lastNewsId);
    setIsLoading(true);
    floristApi
      .fetchNews(florist, lastNewsId !== "" ? lastNewsId : undefined)
      .then((newsUpdate) => {
        lastNewsId === ""
          ? setNews(newsUpdate)
          : setNews((prevNews) => [...prevNews, ...newsUpdate]);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [florist, lastNewsId]);

  return {
    news,
    isLoading,
    error,
    fetchUpdate,
  };
}
