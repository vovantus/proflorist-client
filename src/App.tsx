import ShopMainPage from "./pages/ShopMainPage/ShopMainPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import Layout from "./components/Layouts/Layout.tsx";
import FloristShopLayout from "./components/Layouts/FloristShopLayout.tsx";
import URLS from "./routes/routes.ts";
import CartPage from "./pages/CartPage/CartPage.tsx";
import NewsPage from "./pages/NewsPage/NewsPage.tsx";
import Page404 from "./pages/NotFoundPage/Page404.tsx";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.tsx";
import { useGetFloristInfo } from "./hooks/useGetFloristInfo.ts";
import useSubdomain from "./hooks/useSubdomain.ts";
import ShopMainPageSkeleton from "./pages/ShopMainPage/ShopMainPageSkeleton.tsx";
import CategoryBouquetsPage from "./pages/CategoryBouquetsPage/CategoryBouquetsPage.tsx";

// ask: 24 04 долго грузится, сначала показыват 404 при первом обращении

function App() {
  const { floristInfo } = useGetFloristInfo();
  const { subdomain } = useSubdomain();

  return subdomain ? (
    <Routes>
      {floristInfo ? (
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
      ) : (
        <Route path="*" element={<ShopMainPageSkeleton />} />
      )}
    </Routes>
  ) : (
    <Routes>
      <Route element={<Layout />}>
        <Route path={URLS.ROOT} element={<MainPage />} />
        <Route path={URLS.ABOUT} element={<AboutPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
