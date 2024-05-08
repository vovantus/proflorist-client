import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import useFloristInfoStore from "../../store/floristInfoStore.ts";

// interface ShopMainPageProps {
//   florist: string;
// }

function ShopMainPage() {
  const { floristInfo } = useFloristInfoStore();
  const { bouquets, isLoading } = useGetBouquets(floristInfo.name);

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}

export default ShopMainPage;
