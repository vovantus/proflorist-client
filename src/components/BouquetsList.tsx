import BouquetCard from "./BouquetCard/BouquetCard";
import BouquetCardSkeleton from "./BouquetCard/BouquetCardSkeleton";
import Bouquet from "../types/bouquet";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

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
