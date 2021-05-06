import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useStyles } from './styles';

const ToolBar: FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <Button
          component={Link}
          to="/tasks/new"
          variant="contained"
          color="primary"
        >
          Nueva Tarea
        </Button>
      </Box>
    </Box>
  );
};

export default ToolBar;
