import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import FloristAppBar from "./FloristAppBar";

export default function FloristShopLayout() {
  return (
    <>
      <FloristAppBar />
      <Outlet />
      <BottomNav />
    </>
  );
}
