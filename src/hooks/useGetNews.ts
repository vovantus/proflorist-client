import { useEffect, useState } from "react";
import floristApi from "../api/floristApi";
import News from "../types/news";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export function useGetNews(florist: string = "") {
  const [status, setStatus] = useState<"idle" | "loading" | "endReached">(
    "idle"
  );
  const [error, setError] = useState("");
  const [news, setNews] = useState<News[]>([]);
  const [newsCursor, setNewsCursor] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData> | ""
  >("");

  const [lastNewsRef, setLastNewsRef] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData> | ""
  >("");

  useEffect(() => {
    if (!florist) return;
    setStatus("loading");
    floristApi
      .fetchNews(florist, newsCursor)
      .then(({ newsList, totalNewsCount, lastDoc }) => {
        setNews(
          newsCursor ? (prevNews) => [...prevNews, ...newsList] : newsList
        );

        setLastNewsRef(lastDoc);

        setStatus(
          newsList.length + news.length >= totalNewsCount
            ? "endReached"
            : "idle"
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setStatus("idle");
      });
  }, [florist, news.length, newsCursor]);

  const initiateNewsUpdate = () => {
    if (status === "idle") setNewsCursor(lastNewsRef);
  };

  return {
    news,
    status,
    error,
    initiateNewsUpdate,
  };
}
