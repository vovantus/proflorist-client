import { useGetCategories } from "../../hooks/useGetCategories";
import { Box } from "@mui/material";
import CatalogCategory from "./CatalogCategory";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo";

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
