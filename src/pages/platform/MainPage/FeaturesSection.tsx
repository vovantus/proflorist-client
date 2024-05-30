import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";

interface Feature {
  icon: string;
  header: string;
  text: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Proflorist Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={feature.icon}
                      alt={feature.header}
                      sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        border: "2px solid #000",
                      }}
                    />
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.header}
                    </Typography>
                  </Box>
                  <Typography>{feature.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
