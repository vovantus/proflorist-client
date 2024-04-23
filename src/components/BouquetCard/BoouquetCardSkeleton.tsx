import { Typography, Card, Skeleton, CardContent } from "@mui/material";

export default function BouquetCardSkeleton() {
  return (
    <Card
      sx={{
        width: 350,
        height: 350,
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
}
