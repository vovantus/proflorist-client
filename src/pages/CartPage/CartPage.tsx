import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import useCartStore from "../../store/cartStore";
import { useGetBouquets } from "../../hooks/useGetBouquets";
import { useMemo } from "react";
import CartBouquet from "../../types/cartBouquet";
import CartBouquetItem from "./CartBouquetItem";
import URLS from "../../routes/routes";
import { Link } from "react-router-dom";

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

  const CartTotalCard = () => {
    return (
      <Card sx={{ minWidth: 350, position: "fixed", bottom: "68px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Total:
          </Typography>
          <Typography variant="h5" component="div">
            {cartTotal}€
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cartTotalQuantity()} bouquets
          </Typography>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            sx={{ width: "100%" }}
          >
            Proceed to checkout
          </Button>
        </CardContent>
      </Card>
    );
  };

  const EmptyBasket = () => {
    return (
      <Card sx={{ minWidth: 350, position: "fixed", bottom: "68px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Basket is empty
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Please, go to catalog
          </Typography>
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            sx={{ width: "100%" }}
            component={Link}
            to={URLS.FLORIST.ROOT}
          >
            go to catalog
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {cartBouquetsList}
      </Box>
      {cartTotalQuantity() ? CartTotalCard() : EmptyBasket()}
    </Box>
  );
}
