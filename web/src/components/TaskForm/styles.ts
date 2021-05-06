import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    paddingTop: theme.spacing(8),
  },
  card: {
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
