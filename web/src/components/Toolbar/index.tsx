import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Button, Modal } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import FiltersForm from '../FiltersForm';
import { useStyles } from './styles';

type ToolBarProps = {
  filters: FiltersTask;
  getFilters: (filters: FiltersTask) => void;
};
const ToolBar: FC<ToolBarProps> = ({ filters, getFilters }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box>
        <Box className={classes.root}>
          <IconButton onClick={() => setIsModalOpen(true)}>
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
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className={classes.containerFiltersForm}>
          <Box className={classes.contentFiltersForm}>
            <FiltersForm
              filters={filters}
              getFilters={getFilters}
              onClose={() => setIsModalOpen(false)}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ToolBar;
