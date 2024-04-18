import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./firebase";

//TODO: error handling

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
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
