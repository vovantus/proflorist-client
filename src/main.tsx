import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./firebase";

// Lazy load the App component
const App = lazy(() => import("./App.tsx"));

// Create a fallback component for Suspense
const LoadingFallback = () => <div>Loading main...</div>;

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
