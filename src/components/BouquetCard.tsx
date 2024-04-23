import CardContent from "@mui/material/CardContent";
import { Typography, Button, Card, Skeleton, CardMedia } from "@mui/material";
import { useState } from "react";
import Bouquet from "../types/bouquet";
import useCartStore from "../store/cartStore";
import useFetchBouquetImage from "../hooks/useFetchBouquetUrl";

interface BouquetProps {
  bouquet: Bouquet;
}

export default function BouquetCard({ bouquet }: BouquetProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageUrl } = useFetchBouquetImage(bouquet);
  const { addBouquet } = useCartStore();

  //ASK: 15 04 2024 как сделать сетку чтобы на планшетах смотрелось без пустой области справа(пример ipad mini)

  //TODO:
  //   атрибуты loading - lazy
  //   decoding
  // настроить кэширование картинок, когда сделаю админку и загрузку картинок
  // настроить lazyload чтоб нормально грузились картинки

  const card = () => {
    return (
      <Card
        sx={{
          width: 350,
          position: "relative",
          borderRadius: "24px",
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={350}
            animation="wave"
            sx={{ borderRadius: "24px", position: "absolute" }}
          />
        )}
        {imageUrl && (
          <CardMedia
            component="img"
            sx={{
              height: 350,
              display: "block",
            }}
            image={imageUrl}
            title={bouquet.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        )}
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
          <Button size="small" onClick={() => addBouquet(bouquet)}>
            From {bouquet.price}€
          </Button>
        </CardContent>
      </Card>
    );
  };

  const cardSkeleton = () => {
    return (
      <Card
        sx={{
          width: 350,
          height: 350,
          borderRadius: "24px",
        }}
      >
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
