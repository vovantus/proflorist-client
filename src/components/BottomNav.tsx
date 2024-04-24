import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Link, useLocation } from "react-router-dom";
import URLS from "../routes/routes";
import useCartStore from "../store/cartStore";

// с прошлого синка: использовать useeffect в зависимости от uselocation попробоавть разные values и класит в current tab

// ASK: 23 04 выглядит странно, но работает

export default function BottomNav() {
  const { pathname } = useLocation();
  const { cartTotalQuantity } = useCartStore();

  // paths in decending order, parent paths at the end
  const relevantRoutes = [URLS.FLORIST.NEWS, URLS.FLORIST.CART, ""];
  const absoluteRoutes = relevantRoutes.map((url) => "/" + url);
  const currentTab = absoluteRoutes.find((el) => pathname.includes(el));

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentTab}
        sx={{ minHeight: "64px" }}
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
