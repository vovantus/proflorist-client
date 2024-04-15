
import { Container } from "@mui/material";
import MainPage from "./pages/MainPage/MainPage.tsx";

function App() {
  return (
    <Container
      sx={{
        // bgcolor: "grey",
        height: "100vh",
        p: 1,
        width: { xxs: "100%", md: "900px", lg: "1200px" },
      }}
    >
      <MainPage />
    </Container>
  );
}

export default App
