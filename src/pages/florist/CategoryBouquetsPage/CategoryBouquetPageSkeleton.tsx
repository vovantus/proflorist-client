import Box from "@mui/material/Box";
import BouquetCardSkeleton from "../../../components/BouquetCard/BouquetCardSkeleton";

export default function CategoryBouquetPageSkeleton() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,350px)",
        width: "100%",
        marginX: "auto",
        gap: "8px",
        justifyContent: "center",
        alignContent: "start",
      }}
    >
      {Array.from(new Array(12)).map((_, index) => (
        <BouquetCardSkeleton key={index} />
      ))}
    </Box>
  );
}
