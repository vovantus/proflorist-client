import { Suspense, lazy } from "react";
import { FLORIST_URLS } from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import ShopLoadingFallback from "../components/ShopLoadingFallback/ShopLoadingFallback";

const CategoriesPage = lazy(
  () => import("../pages/florist/CategoriesPage/CategoriesPage")
);
const CategoryBouquetsPage = lazy(
  () => import("../pages/florist/CategoryBouquetsPage/CategoryBouquetsPage")
);
const CartPage = lazy(() => import("../pages/florist/CartPage/CartPage"));
const NewsPage = lazy(() => import("../pages/florist/NewsPage/NewsPage"));
const ShopMainPage = lazy(
  () => import("../pages/florist/ShopMainPage/ShopMainPage")
);
const Page404 = lazy(() => import("../pages/NotFoundPage/Page404"));
const AboutPage = lazy(() => import("../pages/florist/AboutPage/AboutPage"));
const ContactsPage = lazy(
  () => import("../pages/florist/ContactsPage/ContactsPage")
);
const DeliveryPage = lazy(
  () => import("../pages/florist/DeliveryPage/DeliveryPage")
);

const FloristRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<ShopLoadingFallback />}>
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
            <Route path={FLORIST_URLS.DELIVERY} element={<DeliveryPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default FloristRoutes;