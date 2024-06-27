import BouquetList from "../../../components/BouquetsList.tsx";
import { useParams } from "react-router-dom";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo.ts";

export default function CategoryBouquetsPage() {
  const params = useParams();
  const { floristInfo } = useGetFloristInfo();

  return (
    <>
      <BouquetList
        floristName={floristInfo.name}
        categoryId={params?.categoryId}
      />
    </>
  );
}
