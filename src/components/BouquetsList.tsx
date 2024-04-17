import BouquetCard from "./BouquetCard";
import { Bouquet } from "../types/bouquet";

interface BouquetListProps {
  bouquets: Bouquet[];
  isLoading: boolean;
}

//ASK: почему тут TS не ругается, когда создаю массив пустых?

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  return (
    <>
      {(isLoading ? Array.from(new Array(3)) : bouquets).map((bouq, index) => (
        <BouquetCard key={index} bouquet={bouq} />
      ))}
    </>
  );
}
