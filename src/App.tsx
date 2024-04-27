import { useGetFloristInfo } from "./hooks/useGetFloristInfo.ts";
import PlatformRoutes from "./routes/PlatformRoutes.tsx";
import FloristRoutes from "./routes/FloristRoutes.tsx";

// ask: 24 04 долго грузится, сначала показыват 404 при первом обращении

function App() {
  const { subdomain, floristInfo } = useGetFloristInfo();

  return subdomain ? (
    <FloristRoutes floristInfo={floristInfo} />
  ) : (
    <PlatformRoutes />
  );
}

export default App;
