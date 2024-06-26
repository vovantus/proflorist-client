import {
  Typography,
  Button,
  Card,
  Skeleton,
  CardContent,
  Box,
} from "@mui/material";
import { useState, memo } from "react";
import Bouquet from "../../types/bouquet";
import useBoundStore from "../../store/boundStore";
import useFetchBouquetImage from "../../hooks/useFetchBouquetUrl";

interface BouquetProps {
  bouquet: Bouquet;
  showBouquet: (bouquet: Bouquet) => void;
  onAddToCart: (bouquetName: string) => void;
}

const areBouquetsEqual = (oldProps: BouquetProps, newProps: BouquetProps) => {
  return oldProps.bouquet.price === newProps.bouquet.price;
};

const BouquetCard = memo(function BouquetCard({
  bouquet,
  showBouquet,
  onAddToCart,
}: BouquetProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageUrl } = useFetchBouquetImage(bouquet);
  const addItem = useBoundStore((state) => state.addItem);

  const addToCart = () => {
    addItem(bouquet.id);
    onAddToCart(bouquet.name);
  };

  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        position: "relative",
        borderRadius: "24px",
      }}
    >
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            borderRadius: "24px",
            position: "absolute",
            top: "0px",
            left: "0px",
            width: 350,
            height: 350,
          }}
        />
      )}
      <Box
        component="img"
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: 350,
          width: 350,
          borderRadius: "24px",
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          cursor: "pointer",
        }}
        src={imageUrl}
        title={bouquet.name}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onClick={() => showBouquet(bouquet)}
      />

      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: "5px",
          ":last-child": { pb: 1 },
        }}
      >
        <Typography
          onClick={() => showBouquet(bouquet)}
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{
            cursor: "pointer",
            textWrap: "nowrap",
            overflow: "clip",
            textOverflow: "ellipsis",
            pr: 1,
            width: 200,
          }}
        >
          {bouquet.name}
        </Typography>
        <Button
          component="div"
          sx={{ minWidth: "100px", textWrap: "nowrap" }}
          size="small"
          onClick={addToCart}
        >
          From {bouquet.price}€
        </Button>
      </CardContent>
    </Card>
  );
},
areBouquetsEqual);

export default BouquetCard;
