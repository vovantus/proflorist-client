import { Button, Paper, Box } from "@mui/material";
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
  const { cartItems, addItem, removeItem, cartTotalQuantity } = useCartStore();

  const bouquetIds = useMemo(() => {
    return cartItems.map((el) => el.id);
  }, [cartItems]);

  const { bouquets } = useGetBouquets(florist, bouquetIds);

  const cartBouquets = cartItems.reduce((acc, item) => {
    const bouquet = bouquets.find((b) => b.id === item.id);
    if (bouquet) {
      acc.push({
        ...bouquet,
        quantity: item.quantity,
      });
    }
    return acc;
  }, [] as CartBouquet[]);

  const cartTotal =
    Math.round(
      cartBouquets.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0) * 100
    ) / 100;

  const cartBouquetsList = (cartBouquets: CartBouquet[]) =>
    cartBouquets.map((bouquet) => (
      <Paper key={bouquet!.id} sx={{ p: 2 }}>
        {bouquet.name} {bouquet!.price}
        <Button onClick={() => removeItem(bouquet.id)}>-</Button>
        {bouquet.quantity}
        <Button onClick={() => addItem(bouquet.id)}>+</Button>
      </Paper>
    ));

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div>Cart</div>
      {cartBouquetsList(cartBouquets)}
      <div>Cart total</div>
      {cartTotalQuantity()} bouquets {cartTotal}€
    </Box>
  );
}
