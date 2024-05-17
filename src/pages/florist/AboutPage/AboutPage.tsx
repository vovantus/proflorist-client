import useGetStaticInfo from "../../../hooks/useGetStaticInfo";
import { useGetFloristInfo } from "../../../hooks/useGetFloristInfo";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import { useState } from "react";


export default function AboutPage() {
  const { floristInfo } = useGetFloristInfo();
  const { isLoading, info } = useGetStaticInfo(floristInfo?.name, "about");
  const [imageLoaded, setImageLoaded] = useState(false);

  const convertTextToParagraps = (text: string) => {
    return text.split("\\n").map((el) => {
      return <Typography variant="body2">{el}</Typography>;
    });
  };

  return (
    <Card sx={{ width: { xxs: 400, sm: 720 }, pb: 2 }}>
      <Box
        sx={{
          width: { xxs: "100%", sm: 400 },
          float: { xxs: "none", sm: "right" },
          aspectRatio: "1 / 1",
        }}
      >
        <CardMedia
          component="img"
          src={info?.image}
          sx={{
            width: "100%",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <Skeleton
            sx={{
              width: "100%",
              aspectRatio: "1 / 1",
              transform: "none",
              borderRadius: 0,
              borderBottomLeftRadius: { xxs: 0, sm: 4 },
            }}
          />
        )}
      </Box>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {isLoading ? <Skeleton width={280} /> : info?.header}
        </Typography>
        {imageLoaded && info ? (
          convertTextToParagraps(info.text)
        ) : (
          <>
            <Skeleton sx={{ width: { xxs: "auto", sm: 280 } }} />
            <Skeleton sx={{ width: { xxs: "auto", sm: 280 } }} />
            <Skeleton sx={{ width: { xxs: "auto", sm: 280 } }} />
            <Skeleton sx={{ width: { xxs: "auto", sm: 280 } }} />
          </>
        )}
      </CardContent>
      {!imageLoaded && (
        <>
          <div style={{ clear: "both" }}></div>
          <Skeleton sx={{ position: "relative", bottom: 0, m: 2 }} />
          <Skeleton sx={{ position: "relative", bottom: 0, m: 2 }} />
        </>
      )}
    </Card>
  );
}
