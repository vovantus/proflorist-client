import { Card, CardContent, Typography, Box, Button } from "@mui/material";
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
        width: { xxs: "95%", lg: 1200 },
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        src={imageUrl}
        title={bouquet.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
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
            sx={{ width: 110 }}
          >
            Add to cart
          </Button>
        </Box>
        <Typography variant="h6">{bouquet.price}€</Typography>
        <Typography variant="body2">{bouquet.description}</Typography>
      </CardContent>
    </Card>
  );
}
