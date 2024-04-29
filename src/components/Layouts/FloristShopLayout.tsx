import { Outlet } from "react-router-dom";
import BottomNav from "../BottomNav";
import FloristAppBar from "../FloristAppBar";
import { Container, Box } from "@mui/material";
import ShopMainPageSkeleton from "../../pages/ShopMainPage/ShopMainPageSkeleton";
import { useGetFloristInfo } from "../../hooks/useGetFloristInfo";

// interface FloristShopLayoutProps {
//   florist: FloristInfo | null;
// }

export default function FloristShopLayout() {
  const { floristInfo } = useGetFloristInfo();
  return (
    <Container
      sx={{
        // bgcolor: "grey",
        height: "100vh",
        px: { xxs: "8px", md: "8px" },
        width: "100%",
      }}
    >
      {floristInfo ? (
        <>
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
        </>
      ) : (
        <ShopMainPageSkeleton />
      )}
    </Container>
  );
}
