import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

//ASK: мне нужна ширина до 320пх для мелких телефонов, это ок так добавлять брейкпоинт? (xxs добавил)
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      //   xxs: 0,
      //   xs: 350,
      //   sm: 600,
      //   md: 830,
      //   lg: 1200,
      //   xl: 1536,

      xxs: 0,
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#fed7c1",
      main: "#ffa56c",
      dark: "#f77c18",
      contrastText: "#000",
    },
    secondary: {
      light: "#98d9ff",
      main: "#76cafe",
      dark: "#63bffd",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
