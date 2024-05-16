import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import { Link, useLocation } from "react-router-dom";
import useBoundStore from "../store/boundStore";
import { FLORIST_URLS } from "../routes/routes";

// paths in decending order, parent paths at the end
const tabRoutes = [
  FLORIST_URLS.NEWS,
  FLORIST_URLS.CART,
  FLORIST_URLS.CATALOG.ROOT,
  FLORIST_URLS.ROOT,
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const cartTotalQuantity = useBoundStore((state) => state.cartTotalQuantity);

  let currentTab: string | undefined = tabRoutes.find((el) =>
    pathname.startsWith(el)
  );
  if (currentTab === "/") currentTab = pathname;

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.0)",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentTab}
        sx={{
          minHeight: "64px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        <BottomNavigationAction
          icon={<ArticleOutlinedIcon />}
          label="News"
          value={tabRoutes[0]}
          to={tabRoutes[0]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<YardOutlinedIcon />}
          label="Showcase"
          value={tabRoutes[3]}
          to={tabRoutes[3]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<GridViewOutlinedIcon />}
          label="Catalog"
          value={tabRoutes[2]}
          to={tabRoutes[2]}
          component={Link}
        />

        <BottomNavigationAction
          icon={
            <Badge
              badgeContent={cartTotalQuantity}
              color="primary"
              max={99}
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          }
          label="Cart"
          value={tabRoutes[1]}
          to={tabRoutes[1]}
          component={Link}
        />
      </BottomNavigation>
    </Paper>
  );
}
