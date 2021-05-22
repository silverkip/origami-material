import useStyle from './styles';
import {Typography, Container, Grid, Box, Button, CssBaseline } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import customTheme from './theme';
import Fade from 'react-reveal/Fade';
import {React, useRef} from 'react';
import Carousel from './Components/Carousel';
import guideTexts from './GuideTexts';

const wideTexts = [
  "But instead of reading about the long history of Origami, let's learn it by doing!",
  "All you need is a piece of square paper and you are set!",
]

function App() {
  const classes = useStyle();

  return (
    <>
      <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div className={classes.fullScreenSlides}>
        <div>
          <div className={classes.container}>
            <Grid container sm className={classes.heroContainer}>
              <Grid item xs={12} sm={12} md={7} lg={7} className={classes.heroImage} />
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Typography variant="h1" color="textPrimary" className={classes.heroText}>
                  Origami
                </Typography>
                <Typography variant="h4" color="textPrimary" className={classes.heroText} paragraph>
                  The art of paper folding
                </Typography>
              </Grid>
            </Grid>
          </div>

          <Fade bottom cascade duration={700} delay={200}>
              <div className={classes.container}>
                <Grid container className={classes.heroContainer}>
                  <Grid item sm={12} md={12} lg={12}>
                    <Typography variant="h5" align="center" color="textPrimary" paragraph className={classes.responsiveText}>
                      The word <Box fontWeight={800} display='inline'>Origami</Box> comes from the Japanese words <Box fontWeight={800} display='inline'>ori</Box>(folding) and <Box fontWeight={800} display='inline'>kami</Box>(paper). Although the name originates from Japan, it is used to refer to any form of paper folding art regardless of culture.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Fade>
          {wideTexts.map((para) => (
            <Fade bottom cascade duration={700} delay={200}>
              <div className={classes.container}>
                <Grid container className={classes.heroContainer}>
                  <Grid item sm={12} md={12} lg={12}>
                    <Typography variant="h5" align="center" color="textPrimary" paragraph className={classes.responsiveText}>
                      {para}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Fade>
          ))}
          

            <Carousel guideData={guideTexts}/>


          <Fade bottom cascade duration={700} delay={200}>
              <div className={classes.container}>
                <Grid container className={classes.heroContainer}>
                  <Grid item sm={12} md={12} lg={12} className={classes.centerAlign}>
                    <Typography variant="h5" align="center" color="textPrimary" className={classes.callToAction}>
                      Want to learn more and get better at origami?
                    </Typography>
                    <Button align="center" variant="contained" color="primary" size="large" href="https://origami.me/">
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Fade>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
