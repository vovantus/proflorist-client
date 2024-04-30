import { useGetCategories } from "../../hooks/useGetCategories";
import { Box } from "@mui/material";
import CatalogCategory from "./CatalogCategory";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo";
import CatalogCategorySkeleton from "./CatalogCategorySkeleton";

// interface CategoriesPageProps {
//   florist: string;
// }

export default function CategoriesPage() {
  const { floristInfo } = useGetFloristInfo();

  const { categories, isLoading } = useGetCategories(floristInfo?.name);
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
      <>
        {isLoading
          ? Array.from(new Array(3)).map((_, index) => (
              <CatalogCategorySkeleton key={index} />
            ))
          : categories.map((cat) => (
              <CatalogCategory key={cat.id} category={cat} />
            ))}
      </>
    </Box>
  );
}
