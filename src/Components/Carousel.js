import {React, useRef} from 'react';
import useStyle from '../styles';
import {Typography, Container, Grid, Box, IconButton, CssBaseline } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const Carousel = ({guideData}) => {
  const classes = useStyle();
  const scroller = useRef(null);

  const scrollLeft = () => {
    scroller.current.scrollBy({
      top: 0,
      left: -scroller.current.clientWidth,
      behavior: 'smooth'
    });
    console.log(scroller.current);
  };

  const scrollRight = () => {
    scroller.current.scrollBy({
      top: 0,
      left: scroller.current.clientWidth,
      behavior: 'smooth'
    });
    console.log("pog");
  };

  return (
    <div className={classes.carouselContainer}>
      <IconButton className={classes.leftIcon} ariaLabel="scroll left" onClick={() => scrollLeft()}>
        <NavigateBeforeIcon className={classes.responsiveIcon} />
      </IconButton>
      <div className={classes.sliderContainer} ref={scroller}>
      {guideData.map((item) => (
        <section className={classes.sliderContent}>
          <Grid container className={classes.guideContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.guideImageContainer}>
              <img src={item.img} alt={item.title} className={classes.guideImage} />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Typography variant="h2" align="center" color="textPrimary">
                {item.title}
              </Typography>
              <Typography variant="h4" align="center" color="textPrimary" paragraph>
                {item.instruction}
              </Typography>
            </Grid>
          </Grid>
        </section>
      ))}
      {/* <section className={classes.sliderContent}>
        <Grid container className={classes.guideContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.guideImageContainer}>
            <img src='/img/origami-hero.png' alt="Step 1" className={classes.guideImage} />
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Typography variant="h2" align="center" color="textPrimary">
              Step 1
            </Typography>
            <Typography variant="h4" align="center" color="textPrimary" paragraph>
              Just google it lol
            </Typography>
            <Button variant="contained">Default</Button>
          </Grid>
        </Grid>
      </section> */}
      </div>
      <IconButton className={classes.rightIcon} ariaLabel="scroll right" onClick={() => scrollRight()}>
        <NavigateNextIcon className={classes.responsiveIcon} />
      </IconButton>
    </div>
  )
}

export default Carousel;