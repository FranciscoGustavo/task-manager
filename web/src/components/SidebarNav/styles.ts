import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 0,
    color: theme.palette.text.secondary,
  },
  activeItem: {
    borderRightStyle: 'solid',
    borderRightWidth: theme.spacing(0.5),
    borderRightColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
  },
}));
