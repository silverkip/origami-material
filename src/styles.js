import { makeStyles, } from '@material-ui/core/styles';
import customTheme from './theme';

const useStyle = makeStyles((theme) => ({
  mainStyle: {
    backgroundColor: customTheme.palette.primary.main,
  },
  container: {
    // backgroundColor: '#aaaaaa',
    padding: theme.spacing(10,6,10),
    height: "100vh",
    alignItems: "center",
    verticalAlign: 'center',
    width: 'auto',
    scrollSnapAlign: 'start',
  },
  heroContainer: {
    display: 'flex',
    alignItems: "center",
    height: "80vh",
    // [theme.breakpoints.only('sm')]: {
    //   height: "80vh",
    // },
    // [theme.breakpoints.only('xs')]: {
    //   height: "80vh",
    // },
    // [theme.breakpoints.only('lg')]: {
    //   height: "80vh",
    // },
    // [theme.breakpoints.only('xl')]: {
    //   height: "80vh",
    // },
  },
  heroImage: {
    backgroundImage: 'url(/img/origami-hero.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100%",
    width: "100%",
    [theme.breakpoints.only('sm')]: {
      height: "50%",
      width: "100%",
    },
    [theme.breakpoints.only('xs')]: {
      height: "50%",
      width: "100%",
    },
    [theme.breakpoints.only('lg')]: {
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.only('xl')]: {
      height: "100%",
      width: "100%",
    },
  },
  heroContent: {
    
  },
  sliderContainer: {
    scrollSnapType:"x mandatory",
    height: '100vh',
    width: '100vw',
    scrollSnapAlign: 'start',
    overflowX:'auto',
    display:'flex',
  },
  
  sliderContent: {
    height: '100%',
    flex:'0 0 100%',
    scrollSnapAlign: 'start',
  },

  heroText: {
    padding: theme.spacing(0,5,0),
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
      padding: theme.spacing(0,1,0),
    },
  },
  responsiveText: {
    padding: theme.spacing(6,1,6),
    '@media (min-width:600px)': {
      padding: theme.spacing(5,4,5),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5,6,5),
    },
  }
}));

export default useStyle;