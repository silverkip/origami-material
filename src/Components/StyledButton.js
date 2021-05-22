import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  root:{
    borderRadius: 15,
  }
});

function StyledButton({label, link}) {
  const classes = useStyles();

  return <Button className={classes.root} href={link}>{label}</Button>
}

export default StyledButton;