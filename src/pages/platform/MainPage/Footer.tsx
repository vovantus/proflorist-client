import { Container, Typography, Button, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.800", color: "white", py: 4 }}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Button color="inherit" href="#features">
            Features
          </Button>
          <Button color="inherit" href="#showcase">
            Showcase
          </Button>
          <Button color="inherit" href="#testimonials">
            Testimonials
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Box>
        <Typography variant="body2" align="center" mt={2}>
          &copy; 2024 Proflorist. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
