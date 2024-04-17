import ShopMainPage from "./pages/ShopMainPage/ShopMainPage.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import Layout from "./components/Layout.tsx";
import FloristShopLayout from "./components/FloristShopLayout.tsx";
import FloristWrapper from "./components/FloristWrapper.tsx";
import URLS from "./routes/routes.ts";
import CartPage from "./pages/CartPage/CartPage.tsx";
import NewsPage from "./pages/NewsPage/NewsPage.tsx";

//ASK 17 04 24 МЕГАвопрос- у меня всё что идет после /:floristName - это приложение магазина флориста, как отдельный функционал, может его вынести в какой-то микрофронтеннд и подключать?

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={URLS.ROOT} element={<MainPage />} />
        <Route path={URLS.ABOUT} element={<AboutPage />} />

        <Route path={"/:floristName"} element={<FloristWrapper />}>
          <Route element={<FloristShopLayout />}>
            <Route index element={<ShopMainPage />} />
            <Route path={URLS.FLORIST.NEWS} element={<NewsPage />} />
            <Route path={URLS.FLORIST.CART} element={<CartPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
