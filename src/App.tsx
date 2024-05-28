import { lazy } from "react";
import useSubdomain from "./hooks/useSubdomain.ts";

const PlatformRoutes = lazy(() => import("./routes/PlatformRoutes.tsx"));
const FloristRoutes = lazy(() => import("./routes/FloristRoutes.tsx"));

function App() {
  const { subdomain } = useSubdomain();

  return subdomain ? <FloristRoutes /> : <PlatformRoutes />;
}

export default App;
