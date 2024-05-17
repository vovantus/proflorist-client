import { FLORIST_URLS } from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../pages/florist/CategoriesPage/CategoriesPage";
import CategoryBouquetsPage from "../pages/florist/CategoryBouquetsPage/CategoryBouquetsPage";
import CartPage from "../pages/florist/CartPage/CartPage";
import NewsPage from "../pages/florist/NewsPage/NewsPage";
import ShopMainPage from "../pages/florist/ShopMainPage/ShopMainPage";
import Page404 from "../pages/NotFoundPage/Page404";
import ScrollToTop from "../components/ScrollToTop";
import AboutPage from "../pages/florist/AboutPage/AboutPage";
import ContactsPage from "../pages/florist/ContactsPage/ContactsPage";

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
          <Route path={FLORIST_URLS.ABOUT} element={<AboutPage />} />
          <Route path={FLORIST_URLS.CONTACTS} element={<ContactsPage />} />
          <Route path={FLORIST_URLS.DELIVERY} element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default FloristRoutes;
