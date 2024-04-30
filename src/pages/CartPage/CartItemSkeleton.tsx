import { Box, Card, CardContent, Typography, Skeleton } from "@mui/material";

export default function CartItemSkeleton() {
  return (
    <Card
      sx={{
        width: 350,
        height: 120,
        position: "relative",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
      elevation={3}
    >
      <Box>
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            width: 75,
            height: "100%",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto", py: 1 }}>
          <Typography variant="h5">
            <Skeleton />
          </Typography>
          <Typography variant="subtitle1">
            <Skeleton />
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
          <Typography variant="subtitle1">
            <Skeleton width={60} />
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Skeleton sx={{ mr: 2, width: 10 }} />
            <Skeleton sx={{ mr: 2, width: 30 }} />
            <Skeleton sx={{ mr: 3, width: 10 }} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
