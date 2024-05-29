import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

import CartItemSkeleton from "./CartItemSkeleton";

export default function CartPageSkeleton() {
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
              <Skeleton width={"100%"} />
            </Typography>
            <Typography
              sx={{ mb: 1.5, textAlign: "end" }}
              color="text.secondary"
            >
              <Skeleton />
            </Typography>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              sx={{ width: "100%" }}
            >
              <Skeleton width={200} />
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, pb: 30 }}>
        {Array.from(new Array(2)).map((_, index) => (
          <CartItemSkeleton key={index} />
        ))}
      </Box>

      {CartTotalCard()}
    </Box>
  );
}
