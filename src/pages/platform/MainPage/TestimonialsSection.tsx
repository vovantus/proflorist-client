import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

interface Testimonials {
  img: string;
  quote: string;
  name: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonials[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xxs={12}
              xs={6}
              sm={4}
              key={index}
              sx={
                index === testimonials.length - 1
                  ? { display: { xxs: "none", xs: "block", sm: "none" } }
                  : { display: "auto" }
              }
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={testimonial.img}
                  alt={`Florist ${index + 1}`}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1" gutterBottom component="div">
                    {testimonial.quote}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "end" }}
                  >
                    {testimonial.name}
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

export default TestimonialsSection;
