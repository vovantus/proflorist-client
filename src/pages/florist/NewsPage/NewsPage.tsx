import { useGetNews } from "../../../hooks/useGetNews";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { useEffect, useRef } from "react";
import useDebounce from "../../../hooks/useDebounce";
import NewsPageSkeleton from "./NewsPageSkeleton";

export default function NewsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { news, status, fetchUpdate } = useGetNews(floristInfo.name);

  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (status !== "idle") {
      return;
    }
    fetchUpdate();
  };

  const debouncedScroll = useDebounce(handleScroll, 500);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            debouncedScroll();
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

  return status === "loading" && news.length === 0 ? (
    <NewsPageSkeleton />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
      }}
    >
      <>
        {news.map((el) => (
          <NewsCard key={el.id} news={el} />
        ))}
      </>

      {status !== "endReached" && <NewsCardSkeleton ref={targetRef} />}
    </Box>
  );
}
