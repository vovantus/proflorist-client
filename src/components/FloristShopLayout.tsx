import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import FloristAppBar from "./FloristAppBar";
import { Container } from "@mui/material";

export default function FloristShopLayout() {
  return (
    <Container
      sx={{
        // bgcolor: "grey",
        height: "100vh",
        px: { xxs: "8px", md: "8px" },
        width: "100%",
      }}
    >
      <FloristAppBar />
      <Outlet />
      <BottomNav />
    </Container>
  );
}
