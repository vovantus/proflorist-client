import { Card, CardContent, Typography, Button } from "@mui/material";
import { FLORIST_URLS } from "../../../routes/routes";
import { Link } from "react-router-dom";

const CartEmpty = function () {
  return (
    <Card
      sx={{
        minWidth: 350,
        position: { xxs: "fixed", md: "sticky" },
        bottom: { xxs: "68px", md: "" },
        top: { xxs: "", md: "80px" },
      }}
    >
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
          to={FLORIST_URLS.ROOT}
        >
          Go to catalog
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartEmpty;
