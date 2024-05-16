import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import useBoundStore from "../../../store/boundStore";
import CartBouquet from "../../../types/cartBouquet";
import useFetchBouquetImage from "../../../hooks/useFetchBouquetUrl";
import { useMemo, useState } from "react";

interface CartBouquetProps {
  bouquet: CartBouquet;
}

export default function CartBouquetItem({ bouquet }: CartBouquetProps) {
  const addItem = useBoundStore((state) => state.addItem);
  const removeItem = useBoundStore((state) => state.removeItem);

  const { imageUrl } = useFetchBouquetImage(bouquet);
  const [imageLoaded, setImageLoaded] = useState(false);

  const CardRender = useMemo(() => {
    return (
      <Card
        sx={{
          display: "flex",
          width: 350,
          height: 120,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        elevation={3}
      >
        <Box sx={{ position: "relative", width: 75, height: 120 }}>
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: 75,
                height: 120,
              }}
            />
          )}
          <Box
            component="img"
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: 75,
              height: 120,
              objectFit: "cover",
              objectPosition: "center",
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            src={imageUrl}
            title={bouquet.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: 275 }}>
          <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
            <Typography component="div" variant="h5">
              {bouquet.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Set article
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 1,
              pl: 2,
              pb: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {bouquet.price}€
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button onClick={() => removeItem(bouquet.id)}>-</Button>
              {bouquet.quantity}
              <Button onClick={() => addItem(bouquet.id)}>+</Button>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  }, [bouquet.id, bouquet.quantity, imageUrl, imageLoaded]);

  return CardRender;
}
