import { makeStyles, Theme, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    paddingBottom: theme.spacing(2),
  },
  container: {
    height: '100%',
    overflow: 'hidden',
  },
  grid: {
    height: '100%',
    overflow: 'hidden',
  },
  column: {
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gap: theme.spacing(2),
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    backgroundColor: fade(theme.palette.secondary.light, 0.25),
    overflow: 'hidden',
  },
}));
