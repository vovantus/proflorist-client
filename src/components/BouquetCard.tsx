import CardContent from "@mui/material/CardContent";
import { Typography, Button, Card, Skeleton, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";
import { Bouquet } from "../types/bouquet";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import useCartStore from "../store/cartStore";

interface BouquetProps {
  bouquet: Bouquet;
}

export default function BouquetCard({ bouquet }: BouquetProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addBouquet } = useCartStore();

  //ASK: 15 04 2024 обсудить, как использовать стилизацию css modules или css in js?
  //ASK: 15 04 2024 как сделать сетку чтобы на планшетах смотрелось без пустой области справа(пример ipad mini)
  //ASK: 15 04 2024 как грузить фоточки в порядке показа на странице, сейчас показывает плейсхолдеры и они заменяются на картинки рандомно
  //ASK: наверное, надо картинку в отдельный компонент выносить?

  //TODO: настроить кэширование картинок, когда сделаю админку и загрузку картинок

  const [imageUrl, setImageUrl] = useState("");

  // ASK куда лучше поставить проверку на непустой букет? может всё внутри useEffect обернуть?
  useEffect(() => {
    const fetchImage = async () => {
      const storage = getStorage();
      const imageRef = ref(storage, bouquet.images[0]);
      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to load image from Firebase Storage", error);
      }
    };

    if (bouquet) {
      fetchImage();
    }
  }, [bouquet]);

  const card = () => {
    return (
      <Card
        sx={{
          width: 378,
          position: "relative",
          borderRadius: "24px",
        }}
      >
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={378}
            animation="wave"
            sx={{ borderRadius: "24px" }}
          />
        )}
        <CardMedia
          component="img"
          sx={{
            height: 378,
            display: imageLoaded ? "block" : "none",
          }}
          image={imageUrl}
          title={bouquet.name}
          onLoad={() => setImageLoaded(true)}
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
          <Typography gutterBottom variant="subtitle1" component="div">
            {bouquet.name}
          </Typography>
          <Button size="small" onClick={() => addBouquet(bouquet)}>
            From {bouquet.price}€
          </Button>
        </CardContent>
      </Card>
    );
  };

  const cardSkeleton = () => {
    return (
      <Card
        sx={{
          width: 378,
          height: 378,
          borderRadius: "24px",
        }}
      >
        <CardContent>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "80%" }} />
          </Skeleton>
          <Typography variant="h3">
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="caption">
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return bouquet ? card() : cardSkeleton();
}
