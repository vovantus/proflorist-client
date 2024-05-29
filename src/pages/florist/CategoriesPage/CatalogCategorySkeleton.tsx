import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function CatalogCategorySkeleton() {
  return (
    <Card
      sx={{
        minWidth: 350,
        textDecoration: "none",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            variant="rounded"
            width={200}
            height={32}
            sx={{ bgcolor: "#ffffff" }}
          />

          <Skeleton
            variant="circular"
            width={32}
            height={32}
            sx={{ bgcolor: "#ffffff" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
