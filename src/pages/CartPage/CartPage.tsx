import { Box, Button, Paper } from "@mui/material";
import useCartStore from "../../store/cartStore";
import { useGetBouquets } from "../../hooks/useGetBouquets";
import { useMemo } from "react";
import Bouquet from "../../types/bouquet";

interface CartPageProps {
  florist: string;
}

interface CartBouquet extends Bouquet {
  quantity: number;
}

export default function CartPage({ florist }: CartPageProps) {
  const { cartItems, addItem, removeItem } = useCartStore();

  const bouquetIds = useMemo(() => {
    return cartItems.map((el) => el.id);
  }, [cartItems]);

  const { bouquets } = useGetBouquets(florist, bouquetIds);

  const cartBouquets: CartBouquet[] = [];

  cartItems.forEach((b) => {
    const bouquet = bouquets.find((el) => el.id == b.id);
    if (bouquet) {
      cartBouquets.push({
        ...bouquet,
        quantity: b.quantity,
      });
    }
  });

  const cartTotal = cartBouquets.reduce((acc, item) => {
    if (item && item.price && item!.quantity) acc += item.price * item.quantity;
    return acc;
  }, 0);

  const cartBouquetsList = (cartBouquets: CartBouquet[]) =>
    cartBouquets.map((bouquet) => (
      <Paper key={bouquet!.id} sx={{ p: 2 }}>
        {bouquet.name} {bouquet!.price}
        <Button onClick={() => addItem(bouquet.id)}>+</Button>
        {bouquet.quantity}
        <Button onClick={() => removeItem(bouquet.id)}>-</Button>
      </Paper>
    ));
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "lightblue",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 1,
        pb: 8,
        pt: 10,
        px: 2,
      }}
    >
      <div>Cart</div>
      {cartBouquetsList(cartBouquets)}
      <div>Cart total</div>
      {cartTotal}
    </Box>
  );
}
