import { Outlet } from "react-router-dom";
import BottomNav from "../BottomNav";
import FloristAppBar from "../FloristAppBar";
import { Container, Box } from "@mui/material";

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
      <Box
        sx={{
          width: "100%",
          //   bgcolor: "lightBlue",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          gap: 1,
          pb: 9,
          pt: { xxs: 8, sm: 10 },
        }}
      >
        <Outlet />
      </Box>
      <BottomNav />
    </Container>
  );
}
