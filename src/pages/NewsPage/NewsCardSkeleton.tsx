import {
  Card,
  CardContent,
  Skeleton,
  Typography,
  Box,
  CardActions,
} from "@mui/material";

export default function NewsCardSkeleton() {
  return (
    <Card
      sx={{
        width: { xxs: 420, sm: 700 },
        position: "relative",
        display: { xxs: "block", sm: "flex" },
        justifyContent: "end",
        height: 420,
      }}
    >
      <Box>
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={420}
          height={420}
          sx={{ position: "absolute", top: 0, right: 0 }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: { xxs: "auto", sm: 0 },

          bgcolor: "rgba(255,255,255,0.85)",
          width: { xxs: "100%", sm: 280 },
          height: { xxs: 160, sm: "auto" },
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton />
          </Typography>
        </CardContent>

        <CardActions sx={{ px: 2 }}>
          <Skeleton width={80} />
        </CardActions>
      </Box>
    </Card>
  );
}
