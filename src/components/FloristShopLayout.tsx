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

        width: { xxs: "100vw", sm: "426px", md: "815px", lg: "1200px" },
      }}
    >
      <FloristAppBar />
      <Outlet />
      <BottomNav />
    </Container>
  );
}
