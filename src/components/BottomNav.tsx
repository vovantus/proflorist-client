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
  const routes = [
    URLS.FLORIST.ROOT + URLS.FLORIST.NEWS,
    URLS.FLORIST.ROOT,
    URLS.FLORIST.ROOT + URLS.FLORIST.CART,
  ].map((url) => params.floristName + url);

  const routeMatch = useRouteMatch(routes);
  const currentTab = routeMatch?.pattern?.path;

  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
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
          value={routes[0]}
          to={URLS.FLORIST.NEWS}
          component={Link}
        />
        <BottomNavigationAction
          icon={<GridViewOutlinedIcon />}
          label="Catalog"
          value={routes[1]}
          to=""
          component={Link}
        />
        <BottomNavigationAction
          icon={<ShoppingCartOutlinedIcon />}
          label="Cart"
          value={routes[2]}
          to={URLS.FLORIST.CART}
          component={Link}
        />
      </BottomNavigation>
    </Paper>
  );
}
