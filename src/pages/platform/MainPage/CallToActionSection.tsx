import { Container, Typography, Button, Box } from "@mui/material";

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        textAlign: "center",
        color: "white",
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Ffooter.jpg?alt=media&token=57e66074-3f06-4e71-bd74-0a801eeab9e4)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ px: 2, py: 4, bgcolor: "rgba(0,0,0,0.5)" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Create Your Florist Website?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Join our platform today and start building your dream website.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Sign Up Now
        </Button>
      </Container>
    </Box>
  );
};

export default CallToActionSection;
