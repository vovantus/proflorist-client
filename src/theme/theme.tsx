import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

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

const theme = createTheme({
  breakpoints: {
    values: {
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
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          overflow-y: scroll;
        }
      `,
    },
  },
});

export default theme;
