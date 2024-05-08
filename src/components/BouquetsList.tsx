import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";
import { Box } from "@mui/material";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  return (
    <>
      <Box
        sx={{
          //   bgcolor: "blue",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,350px)",
          width: "100%",
          marginX: "auto",
          gap: "8px",
          justifyContent: "center",
          alignContent: "start",
        }}
      >
        {isLoading
          ? Array.from(new Array(12)).map((_, index) => (
              <BouquetCardSkeleton key={index} />
            ))
          : bouquets.map((el) => <BouquetCard key={el.id} bouquet={el} />)}
      </Box>
    </>
  );
}
