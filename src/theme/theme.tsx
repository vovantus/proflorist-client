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
      xxs: 0,
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
