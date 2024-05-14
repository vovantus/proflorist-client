import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Skeleton,
  CardMedia,
  IconButton,
} from "@mui/material";
import Bouquet from "../../types/bouquet";
import { useState } from "react";
import useFetchBouquetImage from "../../hooks/useFetchBouquetUrl";
import useBoundStore from "../../store/boundStore";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface BouquetDetailesCardProps {
  bouquet: Bouquet;
  handleClose: () => void;
}

export default function BouquetDetailesCard({
  bouquet,
  handleClose,
}: BouquetDetailesCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { imageUrl } = useFetchBouquetImage(bouquet);
  const addItem = useBoundStore((state) => state.addItem);

  const addAndClose = () => {
    addItem(bouquet.id);
    handleClose();
  };
  return (
    <Card
      elevation={0}
      sx={{
        px: 0,
        width: "100%",
        display: "flex",
        flexDirection: { xxs: "column", sm: "row" },
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: { xxs: "100%", sm: "50%" },
          aspectRatio: "1 / 1",
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          position: "relative",
        }}
      >
        {imageLoaded && (
          <Skeleton
            component="div"
            animation={false}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "none",
              width: "100%",
              height: "100%",
            }}
          />
        )}
        <CardMedia
          component="img"
          sx={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            width: "100%",
          }}
          src={imageUrl}
          title={bouquet.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </Box>
      <CardContent
        sx={{ width: "100%", display: { xxs: "block", sm: "none" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{bouquet.name}</Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={addAndClose}
            sx={{ width: 110, ml: 1, mt: 1 }}
          >
            Add to cart
          </Button>
        </Box>
        <Typography variant="h6" gutterBottom>
          {bouquet.price}€
        </Typography>
        <Typography variant="body2">{bouquet.description}</Typography>
      </CardContent>

      <CardContent sx={{ width: "50%", display: { xxs: "none", sm: "block" } }}>
        <Typography variant="h5" gutterBottom>
          {bouquet.name}
        </Typography>
        <Typography variant="body2">{bouquet.description}</Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
        >
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            {bouquet.price}€
          </Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={addAndClose}
            sx={{ width: 110 }}
          >
            Add to cart
          </Button>
        </Box>
      </CardContent>
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 0, right: 0, mt: 1, mr: 1 }}
      >
        <CloseRoundedIcon />
      </IconButton>
    </Card>
  );
}
