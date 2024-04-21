import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import { Box } from "@mui/material";
//import { useParams } from "react-router-dom";

interface ShopMainPageProps {
  florist: string;
}

function ShopMainPage({ florist }: ShopMainPageProps) {
  //ASK: 16 04 - нормально ли брать то что вернул первый хук и сразу засовывать в параметры второго?
  // const params = useParams();
  console.log(florist);
  const { bouquets, isLoading } = useGetBouquets(florist);

  return (
    <>
      <Box
        sx={{
          // align items - center
          width: "100%",
          bgcolor: "tomato",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xxs: "column", sm: "row" },
          gap: 1,
          pb: 8,
          pt: 10,
        }}
      >
        <BouquetList bouquets={bouquets} isLoading={isLoading} />
      </Box>
    </>
  );
}

export default ShopMainPage;
