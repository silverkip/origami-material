import { ThemeProvider, createMuiTheme, responsiveFontSizes, MuiCssBaseline } from '@material-ui/core/styles'
import 'fontsource-montserrat';
//const customTheme = createMuiTheme();

const customTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#E4EBF2',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //light: '#0066ff',
      main: '#A6A6A6',
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

customTheme.typography.h1 = {
  fontSize: '4rem',
  fontWeight: '400',
  '@media (min-width:600px)': {
    fontSize: '5rem',
    fontWeight: '500',
  },
  [customTheme.breakpoints.up('md')]: {
    fontSize: '6rem',
    fontWeight: '500',
  },
};

customTheme.typography.h4 = {
  fontSize: '1.4rem',
  fontWeight: '300',
  '@media (min-width:600px)': {
    fontSize: '2.125rem',
    fontWeight: '300',
  },
  [customTheme.breakpoints.up('md')]: {
    fontSize: '2.125rem',
    fontWeight: '300',
  },
};

customTheme.typography.h5 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [customTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default customTheme;