import { Typography, Card, Skeleton, CardContent } from "@mui/material";
import { forwardRef } from "react";

const BouquetCardSkeleton = forwardRef<HTMLDivElement>((_props, ref) => (
  <Card
    ref={ref}
    sx={{
      width: 350,
      height: 350,
      position: "relative",
      borderRadius: "24px",
    }}
  >
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

    <CardContent
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: 1,
        ":last-child": { pb: 2 },
      }}
    >
      <Typography variant="subtitle1" component="div">
        <Skeleton width="150px" />
      </Typography>
      <Typography variant="subtitle1" component="div">
        <Skeleton width="90px" />
      </Typography>
    </CardContent>
  </Card>
));

export default BouquetCardSkeleton;
