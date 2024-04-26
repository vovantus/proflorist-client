import { useGetCategories } from "../../hooks/useGetCategories";
import { Box } from "@mui/material";

interface CategoriesPageProps {
  florist: string;
}

export default function CategoriesPage({ florist }: CategoriesPageProps) {
  const { categories, isLoading, error } = useGetCategories(florist);
  console.log(isLoading, error, categories);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <>
        {categories.map((cat) => (
          <div>{cat.name}</div>
        ))}
      </>
    </Box>
  );
}
