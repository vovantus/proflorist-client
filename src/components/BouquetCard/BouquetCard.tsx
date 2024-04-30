import {
  Typography,
  Button,
  Card,
  Skeleton,
  CardContent,
  Box,
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
  const { addItem } = useCartStore();


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
        flex: "0 0 auto",
      }}
    >
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: "24px",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 350,
            height: 350,
          }}
        />
      )}
      <Box
        component="img"
        sx={{
          height: 350,
          width: 350,
          display: "block",
          borderRadius: "24px",
          opacity: imageLoaded ? "100%" : "0%",
        }}
        src={imageUrl}
        title={bouquet.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />

      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "350px",
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
        <Button size="small" onClick={() => addItem(bouquet.id)}>
          From {bouquet.price}€
        </Button>
      </CardContent>
    </Card>
  );
}
