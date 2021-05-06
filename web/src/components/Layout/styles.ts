import { makeStyles, fade, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: fade(theme.palette.primary.light, 0.25),
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingLeft: 256,
    },
  },
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
}));
