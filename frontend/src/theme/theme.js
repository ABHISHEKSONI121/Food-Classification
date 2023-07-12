import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(241,246,249)',
      paper: 'rgb(255, 255, 255)',
    },
    primary: {
      main: 'rgb(101,78,146)',
    },
    text: {
      primary: 'rgb(27,38,44)',
      secondary: 'rgb(123, 132, 140)',
    },
    divider: 'rgb(197, 197, 197)',
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: '"Roboto", sans-serif',
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h5: {
      fontSize: '1.0625rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    overline: {
      fontWeight: 600,
    },
  },
});

export default theme;
