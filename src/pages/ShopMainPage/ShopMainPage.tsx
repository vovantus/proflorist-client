import { useGetBouquets } from "../../hooks/useGetBouquets.ts";
import BouquetList from "../../components/BouquetsList.tsx";
import { Box } from "@mui/material";


interface ShopMainPageProps {
  florist: string;
}

function ShopMainPage({ florist }: ShopMainPageProps) {
  const { bouquets, isLoading } = useGetBouquets(florist);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          //   bgcolor: "tomato",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",

          gap: 1,
          pb: 8,
          pt: { xxs: 8, sm: 10 },
        }}
      >
        <BouquetList bouquets={bouquets} isLoading={isLoading} />
      </Box>
    </>
  );
}

export default ShopMainPage;
