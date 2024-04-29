import BouquetList from "../../components/BouquetsList.tsx";
import { useParams } from "react-router-dom";
import { useGetCategoryBouquets } from "../../hooks/useGetCategoryBouquets.ts";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo.ts";

//ASK продолжение
// в хуке useGetCategoryBouquets, добавил дефолтное значение floristName = "" и передаю в хук floristInfo?.name, это ок? я так все хуки переделал)

export default function CategoryBouquetsPage() {
  const params = useParams();
  const { floristInfo } = useGetFloristInfo();
  const { bouquets, isLoading } = useGetCategoryBouquets(
    floristInfo?.name,
    params?.categoryId
  );

  return (
    <>
      <BouquetList bouquets={bouquets} isLoading={isLoading} />
    </>
  );
}
