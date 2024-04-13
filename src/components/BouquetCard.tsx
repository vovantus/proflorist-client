import { DocumentData } from "firebase/firestore"
import CardContent from '@mui/material/CardContent';
import { Typography, Button, CardActions, Card, Skeleton } from "@mui/material";

interface BouquetProps {
  bouquet: DocumentData;
}

export default function BouquetCard({ bouquet }: BouquetProps) {
  //ASK: ок, то что я использую так функции без аргументов в компоненте?
  const card = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
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
    );
  };

  const cardSkeleton = () => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton variant="circular" width={40} height={40} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton variant="rounded" />
          </Typography>
        </CardContent>
        <CardActions>
          <Skeleton variant="rounded" />
        </CardActions>
      </Card>
    );
  };

  return bouquet ? card() : cardSkeleton();
}