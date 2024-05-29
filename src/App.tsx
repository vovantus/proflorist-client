import { lazy, Suspense } from "react";
import useSubdomain from "./hooks/useSubdomain.ts";
import AppLoadingIndicator from "./components/AppLoadingIndicator.tsx";

const PlatformRoutes = lazy(() => import("./routes/PlatformRoutes.tsx"));
const FloristRoutes = lazy(() => import("./routes/FloristRoutes.tsx"));

function App() {
  const { subdomain } = useSubdomain();

  return (
    <Suspense fallback={<AppLoadingIndicator />}>
      {subdomain ? <FloristRoutes /> : <PlatformRoutes />}
    </Suspense>
  );
}

export default App;
