import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    display: 'Grid',
    gridTemplateRows: '36px 1fr',
    gap: theme.spacing(3),
    height: '100%',
  },
}));
