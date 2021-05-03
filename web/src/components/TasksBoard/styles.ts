import { makeStyles, Theme, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    paddingBottom: theme.spacing(2),
  },
  container: {
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  column: {
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    backgroundColor: fade(theme.palette.secondary.light, 0.25),
  },
}));
