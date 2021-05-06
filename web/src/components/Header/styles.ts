import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  search: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
    color: theme.palette.text.hint,
  },
  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  grow: {
    flexGrow: 1,
  },
}));
