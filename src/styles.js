import { makeStyles, } from '@material-ui/core/styles';
import customTheme from './theme';

const useStyle = makeStyles((theme) => ({
  button: {
    borderRadius:10,
    padding: customTheme.spacing(1,4),
  },

  fullScreenSlides:{
    scrollSnapStop:'always',
    scrollSnapType:'y mandatory',
    overflowX:'hidden',
    height: '100vh',
    width: '100vw',
    overflowY:'auto',
    display:'flex',
    backgroundColor: customTheme.palette.secondary.main,
  },

  responsiveIcon: {
    fontSize:'5rem !important',
    [theme.breakpoints.down('xs')]: {
      fontSize:'2.5rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'4rem !important',
    },
    [theme.breakpoints.up('md')]: {
      fontSize:'5rem !important',
    },
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
    backgroundColor: customTheme.palette.secondary.main,
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
    alignItems: "top",
    height: "100%",
    [theme.breakpoints.up('md')]: {
      alignItems: "center",
    },
  },

  guideImage: {
    padding: theme.spacing(6,2,0),
    width:'100%',
    height:'100%',
    objectFit:'cover',
    alignSelf:'center',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3,12,3),
    },
  },

  guideImageContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent:'center',
    height: "100%",
    [theme.breakpoints.only('xs')]: {
      height: "50%",
      width: "100%",
    },
    [theme.breakpoints.only('sm')]: {
      height: "70%",
      width: "100%",
    },
    [theme.breakpoints.only('md')]: {
      height: "80%",
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
    scrollSnapStop:'always',
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
    height: '100vh',
    width: '100vw',
    flex:'0 0 100%',
    scrollSnapAlign: 'start',
  },

  guideText: {
    padding: theme.spacing(0,12,0),
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center',
      padding: theme.spacing(0,2,0),
    },
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
  },
  callToAction: {
    padding: theme.spacing(6,1,2),
    '@media (min-width:600px)': {
      padding: theme.spacing(5,4,2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5,6,2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5,9,2),
    },
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(5,12,2),
    },
  },
  centerAlign: {
    textAlign: 'center',
  },

}));

export default useStyle;