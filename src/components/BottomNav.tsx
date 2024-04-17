import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Link, useLocation, matchPath, useParams } from "react-router-dom";
import URLS from "../routes/routes";

/** ASK 17 04 24 чтобы определить актиную вкладку и поменять ее цвет используется сравнение текущего адреса со списком адресов в routes.
я генерю список руками склеивая адрес имя фориста+ путь(имя флориста тащу из useParams), вроде бы можно использовать переменные пути типа :floristName, но у меня не заработало.
и еще вопрос routes же не надо в стейт запихивать? они не менются в пределах одного флориста.

*/
export default function BottomNav() {
  const params = useParams();
  const relevantRoutes = [URLS.FLORIST.NEWS, "", URLS.FLORIST.CART];
  const absoluteRoutes = relevantRoutes.map(
    (url) => "/" + params.floristName + URLS.FLORIST.ROOT + url
  );

  const routeMatch = useRouteMatch(absoluteRoutes);
  const currentTab = routeMatch?.pattern?.path;

  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (const pattern of patterns) {
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={currentTab}>
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
          value={absoluteRoutes[1]}
          to={absoluteRoutes[1]}
          component={Link}
        />
        <BottomNavigationAction
          icon={<ShoppingCartOutlinedIcon />}
          label="Cart"
          value={absoluteRoutes[2]}
          to={absoluteRoutes[2]}
          component={Link}
        />
      </BottomNavigation>
    </Paper>
  );
}
