import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";
import { Box, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import BouquetDetailesCard from "./BouquetDetailesCard/BouquetDetailsCard";
//import BouquetDetailsCardSkeleton from "./BouquetDetailesCard/BouquetDetailsCardSkeleton";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

const transitionTime = 500;

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  const [activeBouquet, setActiveBouquet] = useState<Bouquet | null>(null);
  const [showActiveBouquet, setShowActiveBouquet] = useState(false);

  const handleCloseActiveBouquet = () => {
    setShowActiveBouquet(false);
    setTimeout(() => setActiveBouquet(null), transitionTime);
  };
  const setActiveBouquetAndOpen = (bouquet: Bouquet) => {
    setActiveBouquet(bouquet);
    setShowActiveBouquet(true);
  };

  return (
    <>
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
        {isLoading
          ? Array.from(new Array(12)).map((_, index) => (
              <BouquetCardSkeleton key={index} />
            ))
          : bouquets.map((el) => (
              <BouquetCard
                key={el.id}
                bouquet={el}
                showBouquet={setActiveBouquetAndOpen}
              />
            ))}
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={showActiveBouquet}
        onClose={handleCloseActiveBouquet}
        onOpen={() => setShowActiveBouquet(true)}
        transitionDuration={transitionTime}
        PaperProps={{
          sx: { borderTopLeftRadius: "24px", borderTopRightRadius: "24px" },
        }}
        ModalProps={{
          keepMounted: false,
        }}
      >
        {activeBouquet && (
          <BouquetDetailesCard
            bouquet={activeBouquet}
            handleClose={() => setShowActiveBouquet(false)}
          />
        )}
      </SwipeableDrawer>
    </>
  );
}
