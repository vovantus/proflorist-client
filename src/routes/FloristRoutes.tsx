import { FLORIST_URLS } from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import CategoryBouquetsPage from "../pages/CategoryBouquetsPage/CategoryBouquetsPage";
import CartPage from "../pages/CartPage/CartPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import ShopMainPage from "../pages/ShopMainPage/ShopMainPage";
import Page404 from "../pages/NotFoundPage/Page404";
import ScrollToTop from "../components/ScrollToTop";



const FloristRoutes = () => {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
};

export default FloristRoutes;
