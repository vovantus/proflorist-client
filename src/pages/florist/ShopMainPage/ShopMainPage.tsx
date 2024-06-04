import BouquetList from "../../../components/BouquetsList.tsx";
import useBoundStore from "../../../store/boundStore.ts";
import { useGetCategoryBouquets } from "../../../hooks/useGetCategoryBouquets.ts";

function ShopMainPage() {
  const floristInfo = useBoundStore((state) => state.floristInfo);
  const { bouquets, status, initiateUpdate } = useGetCategoryBouquets(
    floristInfo.name
  );

  return (
    <>
      <BouquetList
        bouquets={bouquets}
        status={status}
        initiateUpdate={initiateUpdate}
      />
    </>
  );
}

export default ShopMainPage;
