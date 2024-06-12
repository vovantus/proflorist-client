import { PLATFORM_URLS } from "./routes";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../components/Layouts/Layout";
import AppLoadingIndicator from "../components/AppLoadingIndicator";
import Page404 from "../pages/NotFoundPage/Page404";

const MainPage = lazy(() => import("../pages/platform/MainPage/MainPage"));
const AboutPage = lazy(() => import("../pages/platform/AboutPage/AboutPage"));

const PlatformRoutes = () => {
  return (
    <Suspense fallback={<AppLoadingIndicator />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PLATFORM_URLS.ROOT} element={<MainPage />} />
          <Route path={PLATFORM_URLS.ABOUT} element={<AboutPage />} />
          <Route path="*" element={<Page404 source="platform" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PlatformRoutes;
