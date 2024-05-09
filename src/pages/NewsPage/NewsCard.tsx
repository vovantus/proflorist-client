import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import News from "../../types/news";
import { Link } from "react-router-dom";
import { FLORIST_URLS } from "../../routes/routes";
import { useState } from "react";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const [imgLoading, setImageLoading] = useState(true);

  return (
    <Card
      sx={{
        width: { xxs: 420, sm: 700 },
        position: "relative",
        display: { xxs: "block", sm: "flex" },
        justifyContent: "end",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{
            height: 420,
            opacity: imgLoading ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
          image={news.imageUrl}
          alt={news.header}
          onLoad={() => setImageLoading(false)}
        />
        {imgLoading && (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            width={420}
            height={420}
            sx={{ position: "absolute", top: 0, right: 0 }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: { xxs: "auto", sm: 0 },

          bgcolor: "rgba(255,255,255,0.85)",
          width: { xxs: "100%", sm: 280 },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.text}
          </Typography>
        </CardContent>

        {news.categoryId && (
          <CardActions>
            <Button
              component={Link}
              to={FLORIST_URLS.CATALOG.ROOT + "/" + news.categoryId}
              size="small"
              color="primary"
            >
              {news.linkTitle ?? "Show boouquets"}
            </Button>
          </CardActions>
        )}
      </Box>
    </Card>
  );
}
