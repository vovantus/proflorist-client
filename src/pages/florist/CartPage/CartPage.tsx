import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Skeleton,
  Snackbar,
  Alert,
} from "@mui/material";
import useBoundStore from "../../../store/boundStore";
import { useGetBouquets } from "../../../hooks/useGetBouquets";
import { useMemo, useState } from "react";
import CartBouquet from "../../../types/cartBouquet";
import CartBouquetItem from "./CartBouquetItem";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import CartEmpty from "./CartEmpty";
import CartItemSkeleton from "./CartItemSkeleton";
import theme from "../../../theme/theme";

export default function CartPage() {
  const cartItems = useBoundStore((state) => state.cartItems);
  const cartTotalQuantity = useBoundStore((state) => state.cartTotalQuantity);
  const { floristInfo } = useGetFloristInfo();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const bouquetIds = useMemo(() => {
    return Object.keys(cartItems);
  }, [cartItems]);

  const { bouquets, isLoading } = useGetBouquets(floristInfo.name, bouquetIds);

  const cartBouquets = Object.entries(cartItems).reduce((acc, item) => {
    const bouquet = bouquets.find((b) => b.id === item[0]);
    if (bouquet) {
      acc.push({
        ...bouquet,
        quantity: item[1],
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
    <CartBouquetItem key={bouquet.id} bouquet={bouquet} />
  ));

  const CartTotalCard = () => {
    return (
      <>
        <Card
          elevation={6}
          sx={{
            minWidth: 350,
            position: { xxs: "fixed", md: "sticky" },
            bottom: { xxs: "68px", md: "" },
            top: { xxs: "", md: "80px" },
            bgcolor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, textAlign: "end" }}
              color="text.secondary"
              gutterBottom
            >
              Total:
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "end" }}>
              {isLoading ? <Skeleton width={"100%"} /> : `${cartTotal}€`}
            </Typography>
            <Typography
              sx={{ mb: 1.5, textAlign: "end" }}
              color="text.secondary"
            >
              {cartTotalQuantity} bouquets
            </Typography>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              sx={{ width: "100%" }}
              onClick={() => setSnackbarOpen(true)}
            >
              Proceed to checkout
            </Button>
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xxs: "column", md: "row" },
        alignItems: { xxs: "center", md: "start" },
        gap: 1,
      }}
    >
      {cartTotalQuantity !== 0 ? (
        <>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 30 }}
          >
            {isLoading
              ? Array.from(new Array(2)).map((_, index) => (
                  <CartItemSkeleton key={index} />
                ))
              : cartBouquetsList}
          </Box>

          {CartTotalCard()}
        </>
      ) : (
        <CartEmpty />
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        sx={{ top: { xxs: 64, sm: 80 } }}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          severity="info"
          variant="outlined"
          sx={{
            width: "100%",
            color: theme.palette.secondary.contrastText,
            bgcolor: theme.palette.secondary.main,
          }}
        >
          This is just a demo app!
        </Alert>
      </Snackbar>
    </Box>
  );
}
