import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Skeleton,
  CardMedia,
} from "@mui/material";
import Bouquet from "../../types/bouquet";
import { useState } from "react";
import useFetchBouquetImage from "../../hooks/useFetchBouquetUrl";
import useCartStore from "../../store/cartStore";

interface BouquetDetailesCardProps {
  bouquet: Bouquet;
  handleClose: () => void;
}

export default function BouquetDetailesCard({
  bouquet,
  handleClose,
}: BouquetDetailesCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageUrl } = useFetchBouquetImage(bouquet);
  const { addItem } = useCartStore();

  const addAndClose = () => {
    addItem(bouquet.id);
    handleClose();
  };
  return (
    <Card
      elevation={0}
      sx={{
        px: 0,
        width: { xxs: "100%", lg: 1200 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          aspectRatio: "1 / 1",
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        src={imageUrl}
        title={bouquet.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />

      {!imageLoaded && (
        <Skeleton
          component="div"
          animation="pulse"
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "none",
          }}
        />
      )}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{bouquet.name}</Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={addAndClose}
            sx={{ width: 110, ml: 1, mt: 1 }}
          >
            Add to cart
          </Button>
        </Box>
        <Typography variant="h6" gutterBottom>
          {bouquet.price}€
        </Typography>
        <Typography variant="body2">{bouquet.description}</Typography>
      </CardContent>
    </Card>
  );
}
