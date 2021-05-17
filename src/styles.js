import { ThemeProvider, createMuiTheme, responsiveFontSizes , makeStyles, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0,6,0),
    height: "100vh",
    alignItems: "center",
  },
  heroContainer: {
    display: 'flex',
    alignItems: "center",
    height: "80vh",
  },
  heroImage: {
    backgroundImage: 'url(/img/origami-hero.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100%",
    width: "100%",
    [theme.breakpoints.only('sm')]: {
      height: "50%",
    },
    [theme.breakpoints.only('xs')]: {
      height: "50%",
    },
    [theme.breakpoints.only('lg')]: {
      height: "100%",
    },
    [theme.breakpoints.only('xl')]: {
      height: "100%",
    },
  },
  heroContent: {
    
  },
  heroText: {
    padding: theme.spacing(5,5,5),
  },
}));

export default useStyle;