import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

//ASK 30 04 так ок выставлять ширину в зависимости от контента?

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  const itemWidth = 350;
  const gap = 1;
  const [containerWidth, setContainerWidth] = useState(0);


  const updateContainerWidth = () => {
    const viewportWidth = window.innerWidth;
    const itemsPerRow = Math.floor(viewportWidth / (itemWidth + gap * 8));
    const newWidth = itemsPerRow * itemWidth + (itemsPerRow - 1) * gap * 8;
    setContainerWidth(newWidth);
  };

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  return (
    <>
      <Box
        sx={{
          //   bgcolor: "lightBlue",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "start",
          alignContent: "start",
          width: containerWidth,
          gap: gap,
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
