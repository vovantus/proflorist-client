import Box from "@mui/material/Box";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsPageSkeleton = () => {
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
      {Array.from(new Array(3)).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </Box>
  );
};

export default NewsPageSkeleton;
