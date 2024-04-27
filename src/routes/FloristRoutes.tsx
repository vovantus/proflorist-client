import FloristInfo from "../types/floristInfo";
import URLS from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import CategoryBouquetsPage from "../pages/CategoryBouquetsPage/CategoryBouquetsPage";
import CartPage from "../pages/CartPage/CartPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import ShopMainPage from "../pages/ShopMainPage/ShopMainPage";
import Page404 from "../pages/NotFoundPage/Page404";
import ShopMainPageSkeleton from "../pages/ShopMainPage/ShopMainPageSkeleton";

interface FloristRoutesProps {
  floristInfo: FloristInfo | null;
}

const FloristRoutes = ({ floristInfo }: FloristRoutesProps) => {
  return floristInfo ? (
    <Routes>
      <Route element={<FloristShopLayout />}>
        <Route
          path={URLS.ROOT}
          element={<ShopMainPage florist={floristInfo.name} />}
        />

        <Route path={URLS.FLORIST.CATALOG.ROOT}>
          <Route
            index
            element={<CategoriesPage florist={floristInfo.name} />}
          />
          <Route
            path={URLS.FLORIST.CATALOG.CATEGORY}
            element={<CategoryBouquetsPage florist={floristInfo.name} />}
          />
        </Route>

        <Route path={URLS.FLORIST.NEWS} element={<NewsPage />} />
        <Route
          path={URLS.FLORIST.CART}
          element={<CartPage florist={floristInfo.name} />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<ShopMainPageSkeleton />} />
    </Routes>
  );
};

export default FloristRoutes;
