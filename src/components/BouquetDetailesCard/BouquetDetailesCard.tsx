import { Card, CardContent, Typography } from "@mui/material";
import Bouquet from "../../types/bouquet";

interface BouquetDetailesCardProps {
  bouquet: Bouquet;
}

export default function BouquetDetailesCard({
  bouquet,
}: BouquetDetailesCardProps) {
  return (
    <Card sx={{ mx: 1, width: { xxs: "100%", lg: 1200 }, minHeight: 500 }}>
      <CardContent>
        <Typography variant="h3">{bouquet.name}</Typography>
      </CardContent>
    </Card>
  );
}
