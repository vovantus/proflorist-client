
import { useGetBouquets } from '../../hooks/useGetBouquets.ts';
import BouquetList from '../../components/BouquetsList.tsx';
import { Container, Box } from '@mui/material'





function MainPage() {
    const { bouquets, isLoading } = useGetBouquets();

    return (
      <>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <BouquetList bouquets={bouquets} isLoading={isLoading} />
          </Box>
        </Container>
      </>
    );
  }
  
  export default MainPage;


  