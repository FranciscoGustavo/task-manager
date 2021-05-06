import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    height: theme.spacing(8),
  },
  nav: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  item: {
    width: '100%',
    '& span': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& span': {
        margin: 0,
      },
    },
  },
  activeItem: {
    color: theme.palette.secondary.dark,
  },
}));
