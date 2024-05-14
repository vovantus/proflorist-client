import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import useBoundStore from "../../store/boundStore.ts";

// interface ShopMainPageProps {
//   florist: string;
// }

function ShopMainPage() {
  const floristInfo = useBoundStore((state) => state.floristInfo);
  const { bouquets, isLoading } = useGetBouquets(floristInfo.name);

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}

export default ShopMainPage;
