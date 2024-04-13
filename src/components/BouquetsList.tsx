import { DocumentData } from "firebase/firestore"
import BouquetCard from "./BouquetCard";

interface BouquetListProps {
  bouquets: DocumentData[];
  isLoading: boolean;
}

//ASK: почему тут TS не ругается, когда создаю массив пустых?
//AKS: индех так ок передавать в список?

export default function BouquetList({ bouquets, isLoading }: BouquetListProps) {
  return (
    <>
      {(isLoading ? Array.from(new Array(3)) : bouquets).map((bouq, index) => (
        <BouquetCard key={index} bouquet={bouq} />
      ))}
    </>
  );
}