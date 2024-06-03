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
          position: "relative",
        }}
      >
        {!imageLoaded && (
          <Skeleton
            component="div"
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
        sx={{
          width: { xxs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ maxWidth: "90%" }}>
          {bouquet.name}
        </Typography>
        <Typography variant="body2" sx={{ order: { xxs: 1, sm: 0 } }}>
          {bouquet.description}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xxs: "row", sm: "column" },
            justifyContent: { xxs: "space-between", sm: "start" },
            alignItems: "end",
          }}
        >
          <Typography variant="h6" gutterBottom>
            {bouquet.price}€
          </Typography>
          <Button
            size="small"
            variant="outlined"
            onClick={addAndClose}
            sx={{
              width: 110,
              ml: 1,
              mt: 1,
              position: { xxs: "relative", sm: "auto" },
              bottom: { xxs: "40px", sm: "auto" },
            }}
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
