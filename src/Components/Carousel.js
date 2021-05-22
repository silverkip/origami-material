import {React, useRef} from 'react';
import useStyle from '../styles';
import {Typography, Grid, IconButton, Divider } from '@material-ui/core';
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
    console.log(scroller.current);
  };

  return (
    <section className={classes.carouselContainer}>
      <IconButton color="action" className={classes.leftIcon} ariaLabel="scroll left" onClick={() => scrollLeft()}>
        <NavigateBeforeIcon className={classes.responsiveIcon} />
      </IconButton>
      <section className={classes.sliderContainer} ref={scroller}>

      {guideData.map((item) => (
        <section className={classes.sliderContent}>
          <Grid container className={classes.guideContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.guideImageContainer}>
              <img src={item.img} alt={item.title} className={classes.guideImage} />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography variant="h3" align="center" color="textPrimary" className={classes.guideText}>
                {item.title}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="h4" align="center" color="textPrimary" className={classes.guideText} paragraph>
                {item.instruction}
              </Typography>
            </Grid>
            <Grid item xs={0} sm={0} md={1} lg={1}/>
          </Grid>
        </section>
      ))}

      </section>
      <IconButton color="action" className={classes.rightIcon} ariaLabel="scroll right" onClick={() => scrollRight()}>
        <NavigateNextIcon className={classes.responsiveIcon} />
      </IconButton>
    </section>
  )
}

export default Carousel;