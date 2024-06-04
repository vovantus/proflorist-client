import { useGetNews } from "../../../hooks/useGetNews";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { useEffect, useRef } from "react";
import NewsPageSkeleton from "./NewsPageSkeleton";

export default function NewsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { news, status, initiateNewsUpdate } = useGetNews(floristInfo.name);

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (news.length > 0) {
              initiateNewsUpdate();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.0,
      }
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [status]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
      }}
    >
      {status === "loading" && news.length === 0 ? (
        <NewsPageSkeleton />
      ) : (
        <>
          {news.map((el) => (
            <NewsCard key={el.id} news={el} />
          ))}
        </>
      )}

      {status !== "endReached" && <NewsCardSkeleton ref={targetRef} />}
    </Box>
  );
}
