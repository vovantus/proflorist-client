import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";


interface HeroSectionProps {
  heroImageUrl: string;
  isSmallerThanLg?: boolean;
}

const HeroSection = ({ heroImageUrl, isSmallerThanLg }: HeroSectionProps) => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Proflorist</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          color: "white",
          textAlign: "center",
          mt: 3,
        }}
      >
        <Box
          component="img"
          src={heroImageUrl}
          alt="Proflorist Hero"
          sx={{
            width: "100%",
            height: { xxs: "300px", sm: "400px", md: "auto" },
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: { xxs: "90%", sm: 500 },
            bottom: { xxs: "5%", xs: "10%", md: 15 },
            // left: { xxs: "50%", md: "auto" },
            right: { xxs: "50%", sm: 10 },
            transform: { xxs: "translateX(50%)", sm: "none" },
            bgcolor: "rgba(0, 0, 0, 0.6)",
            p: { xxs: 1, md: 4 },
            borderRadius: 1,
          }}
        >
          <Container>
            <Typography
              variant={isSmallerThanLg ? "h4" : "h2"}
              component="h1"
              gutterBottom
            >
              Create Beautiful Florist Websites
            </Typography>
            <Typography variant={isSmallerThanLg ? "h6" : "h5"} gutterBottom>
              Join our platform to get your own stunning website and showcase
              your floral designs effortlessly.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size={isSmallerThanLg ? "medium" : "large"}
            >
              Get Started
            </Button>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default HeroSection;
