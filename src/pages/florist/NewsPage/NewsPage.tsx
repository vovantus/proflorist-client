import { useGetNews } from "../../../hooks/useGetNews";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import NewsCard from "./NewsCard";
import { Box } from "@mui/material";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { useEffect } from "react";

export default function NewsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { news, isLoading, fetchUpdate } = useGetNews(floristInfo.name);
  console.log(news);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchUpdate();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
      }}
      onScroll={handleScroll}
    >
      {isLoading ? (
        news.length === 0 ? (
          Array.from(new Array(3)).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
        ) : (
          <>
            {news.map((el) => (
              <NewsCard key={el.id} news={el} />
            ))}
            <NewsCardSkeleton />
          </>
        )
      ) : (
        <>
          {news.map((el) => (
            <NewsCard key={el.id} news={el} />
          ))}
        </>
      )}
    </Box>
  );
}
