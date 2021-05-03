import React, { FC } from 'react';
import { Box, Container, Typography, IconButton } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useStyles } from './styles';

const FiltersBoard: FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container className={classes.container}>
        <Typography variant="h4">Tareas</Typography>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default FiltersBoard;
