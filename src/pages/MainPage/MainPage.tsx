
import { useGetBouquets } from '../../hooks/useGetBouquets.ts';
import BouquetList from '../../components/BouquetsList.tsx';
import { Container, Box } from '@mui/material'





function MainPage() {

    const { bouquets } = useGetBouquets();
    console.log(bouquets)

      
    return (
      <>
       <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <BouquetList bouquets={bouquets}/>
        </Box>
        
        </Container>
      </>
    )
  }
  
  export default MainPage;


  