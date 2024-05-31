import { Container, Typography, Button, Box } from "@mui/material";

interface FooterProps {
  onFeaturesClick: () => void;
  onShowcaseClick: () => void;
  onTestimonialsClick: () => void;
}

const Footer = ({
  onFeaturesClick,
  onShowcaseClick,
  onTestimonialsClick,
}: FooterProps) => {
  return (
    <Box sx={{ bgcolor: "grey.800", color: "white", py: 4 }}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Button color="inherit" onClick={onFeaturesClick}>
            Features
          </Button>
          <Button color="inherit" onClick={onShowcaseClick}>
            Showcase
          </Button>
          <Button color="inherit" onClick={onTestimonialsClick}>
            Testimonials
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
