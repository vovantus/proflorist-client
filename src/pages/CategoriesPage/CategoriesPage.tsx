import { useGetCategories } from "../../hooks/useGetCategories";
import { Box } from "@mui/material";
import CatalogCategory from "./CatalogCategory";

interface CategoriesPageProps {
  florist: string;
}

export default function CategoriesPage({ florist }: CategoriesPageProps) {
  const { categories, isLoading } = useGetCategories(florist);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <>
        {isLoading ? (
          <div>Loading!</div>
        ) : (
          categories.map((cat) => (
            <CatalogCategory key={cat.id} category={cat} />
          ))
        )}
      </>
    </Box>
  );
}
