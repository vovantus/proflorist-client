import { CardContent, Typography, Button } from "@mui/material";
import { FLORIST_URLS } from "../../routes/routes";
import { Link } from "react-router-dom";

const CartEmpty = function () {
  return (
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
  );
};

export default CartEmpty;
