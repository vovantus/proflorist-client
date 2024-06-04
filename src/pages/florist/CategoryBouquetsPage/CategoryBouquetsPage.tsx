import BouquetList from "../../../components/BouquetsList.tsx";
import { useParams } from "react-router-dom";
import { useGetCategoryBouquets } from "../../../hooks/useGetCategoryBouquets.ts";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo.ts";

export default function CategoryBouquetsPage() {
  const params = useParams();
  const { floristInfo } = useGetFloristInfo();
  const { bouquets, status, initiateUpdate } = useGetCategoryBouquets(
    floristInfo.name,
    params?.categoryId
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
