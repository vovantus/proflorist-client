import URLS from "./routes";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import Page404 from "../pages/NotFoundPage/Page404";

const PlatformRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={URLS.ROOT} element={<MainPage />} />
        <Route path={URLS.ABOUT} element={<AboutPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default PlatformRoutes;
