import React, { FC } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}));

const CircularLoader: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default CircularLoader;
