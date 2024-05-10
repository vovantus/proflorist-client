import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";
import { Box, Backdrop } from "@mui/material";
import { useState } from "react";
import BouquetDetailesCard from "./BouquetDetailesCard/BouquetDetailesCard";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  const [activeBouquet, setActiveBouquet] = useState<Bouquet | null>(null);
  const [showActiveBouquet, setShowActiveBouquet] = useState(false);

  const handleCloseActiveBouquet = () => {
    setActiveBouquet(null);
    setShowActiveBouquet(false);
  };
  const handleOpenActiveBouquet = (bouquet: Bouquet) => {
    setActiveBouquet(bouquet);
    setShowActiveBouquet(true);
  };

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
          : bouquets.map((el) => (
              <BouquetCard
                key={el.id}
                bouquet={el}
                showBouquet={handleOpenActiveBouquet}
              />
            ))}
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: 99999 }}
        open={showActiveBouquet}
        onClick={handleCloseActiveBouquet}
        transitionDuration={{ enter: 500, exit: 300 }}
      >
        {activeBouquet && (
          <BouquetDetailesCard
            bouquet={activeBouquet}
            handleClose={handleCloseActiveBouquet}
          />
        )}
      </Backdrop>
    </>
  );
}
