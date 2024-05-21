import { useGetNews } from "../../../hooks/useGetNews";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import NewsCard from "./NewsCard";
import { Box } from "@mui/material";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { useEffect } from "react";
import useDebounce from "../../../hooks/useDebounce";

export default function NewsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { news, status, fetchUpdate } = useGetNews(floristInfo.name);
  console.log(status);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 360 <
        document.documentElement.offsetHeight ||
      status !== "idle"
    ) {
      return;
    }
    fetchUpdate();
  };

  const debouncedScroll = useDebounce(handleScroll, 500);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
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
      {status === "loading" ? (
        news.length === 0 ? (
          Array.from(new Array(3)).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
        ) : (
          <>
            {news.map((el) => (
              <NewsCard key={el.id} news={el} />
            ))}
          </>
        )
      ) : (
        <>
          {news.map((el) => (
            <NewsCard key={el.id} news={el} />
          ))}
        </>
      )}

      {status !== "endReached" && <NewsCardSkeleton />}
    </Box>
  );
}
