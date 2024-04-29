import PlatformRoutes from "./routes/PlatformRoutes.tsx";
import FloristRoutes from "./routes/FloristRoutes.tsx";
import useSubdomain from "./hooks/useSubdomain.ts";

//поделить на два приложение и сервить на уровне сервака

function App() {
  const { subdomain } = useSubdomain();

  return subdomain ? <FloristRoutes /> : <PlatformRoutes />;
}

export default App;
