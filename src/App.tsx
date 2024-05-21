import PlatformRoutes from "./routes/PlatformRoutes.tsx";
import FloristRoutes from "./routes/FloristRoutes.tsx";
import useSubdomain from "./hooks/useSubdomain.ts";

//plit into two seperate apps and serve on web server level depending on subdomain

function App() {
  const { subdomain } = useSubdomain();

  return subdomain ? <FloristRoutes /> : <PlatformRoutes />;
}

export default App;
