import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    cursor: 'pointer',
  },
}));
