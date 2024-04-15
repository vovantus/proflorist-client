
import { useGetBouquets } from '../../hooks/useGetBouquets.ts';
import BouquetList from '../../components/BouquetsList.tsx';
import { Box } from "@mui/material";

function MainPage() {
  const { bouquets, isLoading } = useGetBouquets();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          //   bgcolor: "tomato",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xxs: "column", sm: "row" },
          gap: 1,
        }}
      >
        <BouquetList bouquets={bouquets} isLoading={isLoading} />
      </Box>
    </>
  );
}
  
  export default MainPage;


  