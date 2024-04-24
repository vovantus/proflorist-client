import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";


interface ShopMainPageProps {
  florist: string;
}

function ShopMainPage({ florist }: ShopMainPageProps) {
  const { bouquets, isLoading } = useGetBouquets(florist);

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}

export default ShopMainPage;
