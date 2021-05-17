import 'fontsource-roboto';
import 'fontsource-montserrat'
import useStyle from './styles'
import {Typography, Container, Grid, Box, Paper, CssBaseline } from '@material-ui/core'


function App() {
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Grid container sm className={classes.heroContainer}>
            <Grid item sm={12} md={3} lg={5} className={classes.heroImage} />
            <Grid item sm={12} md={9} lg={7} className={classes.heroText}>
              <Typography variant="h2" align="left" color="textPrimary">
                Um?
              </Typography>
              <Typography variant="h6" align="left" color="textPrimary" paragraph>
                meow meow meowwwww meow meowmeow meoww meowwwww meowwww
                meowww meowie meowwww meoww meowmeow meoww meowwwww meowwww
                meowwmeow meowwmeow meowww meow meowmeow meoww meowwwww meowwww
                meowww meowmeowmeowwwww meoww meow meow meowmeowww meowwwww meowwww
                meoww meowmeow meowwwww meow meowwmeow meoww meowwwww meowwww
              </Typography>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}

export default App;
