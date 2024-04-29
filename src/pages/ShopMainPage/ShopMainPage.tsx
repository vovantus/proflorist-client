import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo.ts";


// interface ShopMainPageProps {
//   florist: string;
// }

function ShopMainPage() {
  const { floristInfo } = useGetFloristInfo();
  const { bouquets, isLoading } = useGetBouquets(floristInfo?.name || "");

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}

export default ShopMainPage;
