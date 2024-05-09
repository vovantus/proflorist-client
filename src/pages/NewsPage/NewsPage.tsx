import { useGetNews } from "../../hooks/useGetNews";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo";
import NewsCard from "./NewsCard";
import { Box } from "@mui/material";
import NewsCardSkeleton from "./NewsCardSkeleton";

export default function NewsPage() {
  const { floristInfo } = useGetFloristInfo();
  const { news, isLoading } = useGetNews(floristInfo.name);
  console.log(news, isLoading);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "start",
        gap: 1,
      }}
    >
      {isLoading
        ? Array.from(new Array(3)).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
        : news.map((el) => <NewsCard key={el.id} news={el} />)}
    </Box>
  );
}
