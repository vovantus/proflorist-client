import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container
      sx={{
        // bgcolor: "grey",
        height: "100vh",

        width: { xxs: "100vw", sm: "426px", md: "815px", lg: "1200px" },
      }}
    >
      <Outlet />
    </Container>
  );
}
