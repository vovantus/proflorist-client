import { useGetFloristInfo } from "./hooks/useGetFloristInfo.ts";
import PlatformRoutes from "./routes/PlatformRoutes.tsx";
import FloristRoutes from "./routes/FloristRoutes.tsx";



//поделить на два приложение и сервить на уровне сервака

function App() {
  const { subdomain, floristInfo } = useGetFloristInfo();

  return subdomain ? (
    <FloristRoutes floristInfo={floristInfo} />
  ) : (
    <PlatformRoutes />
  );
}

export default App;
