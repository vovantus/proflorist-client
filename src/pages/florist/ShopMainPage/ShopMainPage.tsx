import BouquetList from "../../../components/BouquetsList.tsx";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo.ts";

function ShopMainPage() {
  const { floristInfo } = useGetFloristInfo();

  return (
    <>
      <BouquetList floristName={floristInfo.name} />
    </>
  );
}

export default ShopMainPage;
