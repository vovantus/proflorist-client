import { DocumentData } from "firebase/firestore"
import CardContent from '@mui/material/CardContent';
import { Typography, Button, CardActions, Card } from "@mui/material";


interface BouquetProps {
    bouquet: DocumentData;
}

export default function BouquetCard({bouquet}:BouquetProps) {
    return <Card sx={{ maxWidth: 345 }}>
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {bouquet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {bouquet.description}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">{bouquet.price} Buy</Button>
        
        </CardActions>
  </Card>
}