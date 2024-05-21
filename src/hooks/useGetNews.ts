import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import News from "../types/news";

export function useGetNews(florist: string = "") {
  const [status, setStatus] = useState<"idle" | "loading" | "endReached">(
    "idle"
  );
  const [error, setError] = useState("");
  const [news, setNews] = useState<News[]>([]);
  const [lastNewsId, setLastNewsId] = useState("");

  const fetchUpdate = () => {
    if (status === "idle") setLastNewsId(news[news.length - 1].id);
  };

  useEffect(() => {
    if (florist == "") return;
    setStatus("loading");
    floristApi
      .fetchNews(florist, lastNewsId !== "" ? lastNewsId : undefined)
      .then((newsUpdate) => {
        lastNewsId === ""
          ? setNews(newsUpdate.newsList)
          : setNews((prevNews) => [...prevNews, ...newsUpdate.newsList]);

        newsUpdate.newsList.length + news.length >= newsUpdate.totalNewsCount
          ? setStatus(() => "endReached")
          : setStatus("idle");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setStatus("idle");
      });
  }, [florist, lastNewsId]);

  return {
    news,
    status,
    error,
    fetchUpdate,
  };
}
