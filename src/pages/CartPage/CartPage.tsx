import { Box, Button, Paper } from "@mui/material";
import useCartStore from "../../store/cartStore";

export default function CartPage() {
  const { cartBouquets, addBouquet, removeBouquet } = useCartStore();
  const cartItems = () =>
    cartBouquets.map((bouquet) => (
      <Paper key={bouquet.id} sx={{ p: 2 }}>
        {bouquet.name}

        <Button onClick={() => addBouquet(bouquet)}>+</Button>
        {bouquet.quantity}
        <Button onClick={() => removeBouquet(bouquet)}>-</Button>
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
      {cartItems()}
    </Box>
  );
}
