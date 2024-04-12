import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getTheme from './theme/getTheme';

const theme = createTheme(getTheme('light'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
