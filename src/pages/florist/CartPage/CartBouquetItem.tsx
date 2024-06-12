import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
} from "@mui/material";
import useBoundStore from "../../../store/boundStore";
import CartBouquet from "../../../types/cartBouquet";
import useFetchBouquetImage from "../../../hooks/useFetchBouquetUrl";
import { memo, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

interface CartBouquetProps {
  bouquet: CartBouquet;
  handleDeletionDialogOpen: (bouquet: CartBouquet) => void;
}

function areBoquetsEqual(
  oldProps: CartBouquetProps,
  newProps: CartBouquetProps
) {
  return (
    oldProps.bouquet.price === newProps.bouquet.price &&
    oldProps.bouquet.quantity === newProps.bouquet.quantity
  );
}

const CartBouquetItem = memo(function CartBouquetItem({
  bouquet,
  handleDeletionDialogOpen,
}: CartBouquetProps) {
  const addItem = useBoundStore((state) => state.addItem);
  const removeItem = useBoundStore((state) => state.removeItem);

  const { imageUrl } = useFetchBouquetImage(bouquet);
  const [imageLoaded, setImageLoaded] = useState(false);

  const onMinusPressed = () => {
    if (bouquet.quantity > 1) removeItem(bouquet.id);
    else handleDeletionDialogOpen(bouquet);
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: 350,
        height: 120,
        justifyContent: "space-between",
        flexDirection: "row",
        position: "relative",
      }}
      elevation={3}
    >
      <Box sx={{ position: "relative", width: 75, height: 120 }}>
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: 75,
              height: 120,
            }}
          />
        )}
        <Box
          component="img"
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 75,
            height: 120,
            objectFit: "cover",
            objectPosition: "center",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          src={imageUrl}
          title={bouquet.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: 275 }}>
        <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              textWrap: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {bouquet.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Set article
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pr: 1,
            pl: 2,
            pb: 1,
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {bouquet.price}€
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Button onClick={onMinusPressed}>-</Button>
            {bouquet.quantity}
            <Button onClick={() => addItem(bouquet.id)}>+</Button>
          </Box>
        </Box>
      </Box>
      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => handleDeletionDialogOpen(bouquet)}
      >
        <ClearIcon fontSize="small" sx={{ color: "primary.main" }} />
      </IconButton>
    </Card>
  );
},
areBoquetsEqual);

export default CartBouquetItem;
