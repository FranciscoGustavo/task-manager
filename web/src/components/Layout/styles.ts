import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingLeft: '256px',
      paddingBottom: '0',
    }
  },
  content: {
    width: '100%',
    height: '100%',
  }
}));