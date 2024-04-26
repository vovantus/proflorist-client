import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useLocation } from "react-router-dom";
import URLS from "../routes/routes";
import useCartStore from "../store/cartStore";

// с прошлого синка: использовать useeffect в зависимости от uselocation попробоавть разные values и класит в current tab

// ASK: 23 04 выглядит странно, но работает

export default function BottomNav() {
  const { pathname } = useLocation();
  const { cartTotalQuantity } = useCartStore();

  // paths in decending order, parent paths at the end
  const relevantRoutes = [
    URLS.FLORIST.NEWS,
    URLS.FLORIST.CART,
    URLS.FLORIST.CATALOG,
    "",
  ];
  const absoluteRoutes = relevantRoutes.map((url) => "/" + url);
  const currentTab = absoluteRoutes.find((el) => pathname.includes(el));

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 2255, 255, 0.0)",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentTab}
        sx={{
          minHeight: "64px",
          backgroundColor: "rgba(255, 2255, 255, 0.5)",
          backdropFilter: "blur(8px)",
        }}
      >
        <BottomNavigationAction
          icon={<ArticleOutlinedIcon />}
          label="News"
          value={absoluteRoutes[0]}
          to={absoluteRoutes[0]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<GridViewOutlinedIcon />}
          label="Catalog"
          value={absoluteRoutes[2]}
          to={absoluteRoutes[2]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<StoreIcon />}
          label="Home"
          value={absoluteRoutes[3]}
          to={absoluteRoutes[3]}
          component={Link}
        />
        <BottomNavigationAction
          icon={
            <Badge
              badgeContent={cartTotalQuantity()}
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
          value={absoluteRoutes[1]}
          to={absoluteRoutes[1]}
          component={Link}
        />
      </BottomNavigation>
    </Paper>
  );
}
