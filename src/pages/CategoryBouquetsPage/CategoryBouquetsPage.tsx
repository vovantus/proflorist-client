import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import { useParams } from "react-router-dom";
import { useGetCategoryBouquets } from "../../hooks/useGetCategoryBouquets.ts";

interface CategoryBouquetsPageProps {
  florist: string;
}

// ASK: очень странная логика - сначала фетчим айдишники букетов, потом по айди из другой коллекции фетчим букеты

export default function CategoryBouquetsPage({
  florist,
}: CategoryBouquetsPageProps) {
  const params = useParams();
  const { bouquetIds } = useGetCategoryBouquets(
    florist,
    params.categoryId ? params.categoryId : ""
  );
  const { bouquets, isLoading } = useGetBouquets(florist, bouquetIds);

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}
