import { Suspense, lazy } from "react";
import { FLORIST_URLS } from "./routes";
import FloristShopLayout from "../components/Layouts/FloristShopLayout";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import NewsPageSkeleton from "../pages/florist/NewsPage/NewsPageSkeleton";
import ShopMainPageSkeleton from "../pages/florist/ShopMainPage/ShopMainPageSkeleton";
import Page404 from "../pages/NotFoundPage/Page404";
import CategoriesPageSkeleton from "../pages/florist/CategoriesPage/CategoriesPageSkeleton";
import CategoryBouquetPageSkeleton from "../pages/florist/CategoryBouquetsPage/CategoryBouquetPageSkeleton";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import CartPageSkeleton from "../pages/florist/CartPage/CartPageSkeleton";

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

      <Routes>
        <Route element={<FloristShopLayout />}>
          <Route
            path={FLORIST_URLS.ROOT}
            element={
              <Suspense fallback={<ShopMainPageSkeleton />}>
                <ShopMainPage />
              </Suspense>
            }
          />

          <Route path={FLORIST_URLS.CATALOG.ROOT}>
            <Route
              index
              element={
                <Suspense fallback={<CategoriesPageSkeleton />}>
                  <CategoriesPage />
                </Suspense>
              }
            />
            <Route
              path={FLORIST_URLS.CATALOG.CATEGORY}
              element={
                <Suspense fallback={<CategoryBouquetPageSkeleton />}>
                  <CategoryBouquetsPage />
                </Suspense>
              }
            />
          </Route>

          <Route
            path={FLORIST_URLS.NEWS}
            element={
              <Suspense fallback={<NewsPageSkeleton />}>
                <NewsPage />
              </Suspense>
            }
          />

          <Route
            path={FLORIST_URLS.CART}
            element={
              <Suspense fallback={<CartPageSkeleton />}>
                <CartPage />
              </Suspense>
            }
          />

          <Route
            path={FLORIST_URLS.ABOUT}
            element={
              <Suspense fallback={<AppLoadingIndicator />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path={FLORIST_URLS.CONTACTS}
            element={
              <Suspense fallback={<AppLoadingIndicator />}>
                <ContactsPage />
              </Suspense>
            }
          />
          <Route
            path={FLORIST_URLS.DELIVERY}
            element={
              <Suspense fallback={<AppLoadingIndicator />}>
                <DeliveryPage />
              </Suspense>
            }
          />

          <Route path="*" element={<Page404 source="florist" />} />
        </Route>
      </Routes>
    </>
  );
};

export default FloristRoutes;