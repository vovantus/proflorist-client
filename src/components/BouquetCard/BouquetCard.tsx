import {
  Typography,
  Button,
  Card,
  Skeleton,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import Bouquet from "../../types/bouquet";
import useCartStore from "../../store/cartStore";
import useFetchBouquetImage from "../../hooks/useFetchBouquetUrl";

interface BouquetProps {
  bouquet: Bouquet;
}

export default function BouquetCard({ bouquet }: BouquetProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageUrl } = useFetchBouquetImage(bouquet);
  const { addBouquet } = useCartStore();

  //TODO:
  //   атрибуты loading - lazy
  //   decoding
  // настроить кэширование картинок, когда сделаю админку и загрузку картинок
  // настроить lazyload чтоб нормально грузились картинки

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
        <Button size="small" onClick={() => addBouquet(bouquet.id)}>
          From {bouquet.price}€
        </Button>
      </CardContent>
    </Card>
  );
}
