import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BoouquetCardSkeleton";
import Bouquet from "../types/bouquet";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

// ASK: 23 04 почему такой медленный переход между списком скелетонов и списком букетов?

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  return (
    <>
      {isLoading
        ? Array.from(new Array(3)).map((_, index) => (
            <BouquetCardSkeleton key={index} />
          ))
        : bouquets.map((el) => <BouquetCard key={el.id} bouquet={el} />)}
    </>
  );
}
