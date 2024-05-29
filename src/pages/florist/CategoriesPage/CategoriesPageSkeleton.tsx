import Box from "@mui/material/Box";
import CatalogCategorySkeleton from "./CatalogCategorySkeleton";

export default function CategoriesPageSkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 1,
        // backgroundColor: "blue",
      }}
    >
      {Array.from(new Array(3)).map((_, index) => (
        <CatalogCategorySkeleton key={index} />
      ))}
    </Box>
  );
}
