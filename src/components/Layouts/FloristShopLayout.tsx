import { Outlet } from "react-router-dom";
import BottomNav from "../BottomNav";
import FloristAppBar from "../FloristAppBar";
import { Container, Box } from "@mui/material";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo";
import AppLoadingIndicator from "../AppLoadingIndicator.tsx";

export default function FloristShopLayout() {
  const { isLoading } = useGetFloristInfo();

  return (
    <Container
      sx={{
        // bgcolor: "grey",
        px: { xxs: "8px", md: "8px" },
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {!isLoading ? (
        <>
          <FloristAppBar />
          <Box
            sx={{
              //   bgcolor: "lightBlue",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
              width: "100%",
              height: "100%",
              pb: 9,
              pt: { xxs: 8, sm: 10 },
            }}
          >
            <Outlet />
          </Box>
          <BottomNav />
        </>
      ) : (
        <AppLoadingIndicator />
      )}
    </Container>
  );
}
