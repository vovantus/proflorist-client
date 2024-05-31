import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";

interface Showcase {
  img: string;
  title: string;
  link: string;
}

interface ShowcaseSectionProps {
  showcases: Showcase[];
}

const ShowcaseSection = ({ showcases }: ShowcaseSectionProps) => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.100" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Customers
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Discover real stores built using our platform. Explore the features
          and capabilities of each site by visiting the links below. See
          firsthand how Proflorist can transform your floral business.
        </Typography>
        <Grid container spacing={2}>
          {showcases.map((showcase, index) => (
            <Grid item xxs={12} sm={4} key={index}>
              <a
                href={showcase.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={showcase.img}
                    alt={`Florist ${index + 1}`}
                    sx={{ height: { xxs: 300, md: 200 } }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 1,
                      height: 104,
                    }}
                  >
                    <Typography variant="h6" component="p">
                      {showcase.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      disableElevation
                      sx={{
                        height: { xxs: "auto", sm: 54, md: "auto" },
                        width: { xxs: "auto", sm: 85, md: "auto" },
                      }}
                    >
                      Visit Store
                    </Button>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowcaseSection;
