import { Box } from "@mui/material";
import useCartStore from "../../store/cartStore";
import { useGetBouquets } from "../../hooks/useGetBouquets";
import { useMemo } from "react";
import CartBouquet from "../../types/cartBouquet";

import CartBouquetItem from "./CartBouquetItem";

interface CartPageProps {
  florist: string;
}

export default function CartPage({ florist }: CartPageProps) {
  const { cartItems, cartTotalQuantity } = useCartStore();

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

  const cartBouquetsList = cartBouquets.map((bouquet) => (
    <CartBouquetItem bouquet={bouquet} />
  ));

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div>Cart</div>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {cartBouquetsList}
      </Box>
      <div>Cart total</div>
      {cartTotalQuantity()} bouquets {cartTotal}€
    </Box>
  );
}
