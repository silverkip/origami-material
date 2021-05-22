import { makeStyles, } from '@material-ui/core/styles';
import customTheme from './theme';

const useStyle = makeStyles((theme) => ({
  responsiveButton: {
    margin: customTheme.spacing.unit,
    padding: 24,
  },
  
  responsiveIcon: {
    fontSize:'5rem !important',
  },

  leftIcon: {
    position:'fixed !important',
    top:'50%',
    left:'0px',
    zIndex: '99',
    transform:'translateX(10%) !important',
  },

  rightIcon: {
    position:'fixed !important',
    top:'50%',
    right:'0px',
    zIndex: '99',
    transform:'translateX(-10%) !important',
  },

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

  guideContainer: {
    display: 'flex',
    alignItems: "center",
    height: "100%",
  },

  guideImage: {
    width:'100%',
    height:'100%',
    objectFit:'cover',
  },

  guideImageContainer: {
    display: 'flex',
    alignItems: "center",
    height: "100%",
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
  sliderContainer: {
    transform:'translateZ(0) !important',
    scrollSnapType:"x mandatory",
    height: '100vh',
    width: '100vw',
    scrollSnapAlign: 'start',
    overflowX:'auto',
    overflowY:'hidden',
    display:'flex',
  },

  carouselContainer: {
    transform:'translateZ(0) !important',
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
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5,9,5),
    },
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(5,12,5),
    },
  }
}));

export default useStyle;