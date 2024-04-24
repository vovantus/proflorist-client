import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import useCartStore from "../../store/cartStore";
import CartBouquet from "../../types/cartBouquet";
import useFetchBouquetImage from "../../hooks/useFetchBouquetUrl";

interface CartBouquetProps {
  bouquet: CartBouquet;
}

export default function CartBouquetItem({ bouquet }: CartBouquetProps) {
  const { removeItem, addItem } = useCartStore();
  const { imageUrl } = useFetchBouquetImage(bouquet);
  return (
    <Card sx={{ display: "flex", minWidth: 350 }}>
      <CardMedia
        component="img"
        sx={{ width: 75 }}
        image={imageUrl}
        alt={bouquet.name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
          <Typography component="div" variant="h5">
            {bouquet.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {bouquet.name}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            pr: 1,
            pb: 1,
          }}
        >
          <Button onClick={() => removeItem(bouquet.id)}>-</Button>
          {bouquet.quantity}
          <Button onClick={() => addItem(bouquet.id)}>+</Button>
        </Box>
      </Box>
    </Card>
  );
}
