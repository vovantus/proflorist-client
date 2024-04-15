import { DocumentData } from "firebase/firestore"
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Card, Skeleton, CardMedia } from "@mui/material";
import { useState } from "react";

interface BouquetProps {
  bouquet: DocumentData;
}

export default function BouquetCard({ bouquet }: BouquetProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  //ASK: 15 04 2024 обсудить, как использовать стилизацию css modules или css in js?
  //ASK: 15 04 2024 как сделать сетку чтобы на бланшетах смотрелось без пустой области справа(пример ipad mini)
  //ASK: 15 04 2024 как грузить фоточки в порядке показа на страниц, сейчас показывает плейсхолдеры и они меняются на картинки рандомно

  const card = () => {
    return (
      <Card
        sx={{
          width: { xxs: "100%", sm: "378px" },
          position: "relative",
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={378}
            animation="wave"
          />
        )}
        <CardMedia
          component="img"
          sx={{ height: 378, display: imageLoaded ? "block" : "none" }}
          image={bouquet.images[0]}
          title={bouquet.name}
          onLoad={() => setImageLoaded(true)}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "5px",
            ":last-child": { pb: 1 },
          }}
        >
          <Typography gutterBottom variant="subtitle1" component="div">
            {bouquet.name}
          </Typography>
          <Button size="small">{bouquet.price} Buy</Button>
        </CardContent>
      </Card>
    );
  };

  const cardSkeleton = () => {
    return (
      <Card sx={{ width: { xxs: "100%", sm: "377px" }, height: 378 }}>
        <CardContent>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "80%" }} />
          </Skeleton>

          <Typography variant="h3">
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="caption">
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return bouquet ? card() : cardSkeleton();
}