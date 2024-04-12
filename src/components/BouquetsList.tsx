import { DocumentData } from "firebase/firestore"
import BouquetCard from "./BouquetCard";

interface BouquetListProps {
    bouquets: DocumentData[];
}

export default function BouquetList({bouquets}:BouquetListProps) {
    return (<>
                {bouquets.map((bouq, index)=><BouquetCard key={index} bouquet={bouq}/>)}
            </>
    )
}