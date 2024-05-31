import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
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
        <Grid container spacing={4}>
          {showcases.map((showcase, index) => (
            <Grid item xs={4} key={index}>
              <a
                href={showcase.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={showcase.img}
                    alt={`Florist ${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="p">
                      {showcase.title}
                    </Typography>
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
