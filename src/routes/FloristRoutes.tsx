import { FLORIST_URLS } from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import CategoryBouquetsPage from "../pages/CategoryBouquetsPage/CategoryBouquetsPage";
import CartPage from "../pages/CartPage/CartPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import ShopMainPage from "../pages/ShopMainPage/ShopMainPage";
import Page404 from "../pages/NotFoundPage/Page404";

//ASK 29 04: перенес вызов хука с запрсосм данных флориста внутрь компонентов страниц и убрал у них попс "floristname"
// это ок? проверил чтоб в базу за данными флориста часто не долбило, запрос уходит только если субдомен меняется
// продолжение вопроса в компоненете CategoryBouquetsPage...

const FloristRoutes = () => {
  return (
    <Routes>
      <Route element={<FloristShopLayout />}>
        <Route path={FLORIST_URLS.ROOT} element={<ShopMainPage />} />

        <Route path={FLORIST_URLS.CATALOG.ROOT}>
          <Route index element={<CategoriesPage />} />
          <Route
            path={FLORIST_URLS.CATALOG.CATEGORY}
            element={<CategoryBouquetsPage />}
          />
        </Route>

        <Route path={FLORIST_URLS.NEWS} element={<NewsPage />} />
        <Route path={FLORIST_URLS.CART} element={<CartPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default FloristRoutes;
