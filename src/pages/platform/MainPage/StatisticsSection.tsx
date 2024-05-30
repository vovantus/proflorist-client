import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

interface Statistics {
  value: string;
  text: string;
}

interface StatisticsSectionProps {
  statistics: Statistics[];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Why Choose Proflorist?
        </Typography>
        <Grid container spacing={4}>
          {statistics.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h3" component="h4" align="center">
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {stat.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection;
