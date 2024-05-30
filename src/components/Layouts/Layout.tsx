import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container
      sx={{
        // bgcolor: "grey",
        height: "100vh",

        width: { xxs: "100vw", md: 815, lg: 1200 },
      }}
    >
      <Outlet />
    </Container>
  );
}
