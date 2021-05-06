import React, { FC } from 'react';
import {
  Box,
  Container,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { Layout, TasksTable, ToolBar } from '../../components';
import { useTasks } from '../../hooks';
import { useStyles } from './styles';

const Tasks: FC = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useTasks();

  return (
    <Layout>
      <Box className={classes.root}>
        <Container className={classes.container}>
          <ToolBar />
          {error && <Typography>Ups algo salio mal</Typography>}
          {isLoading && <CircularProgress color="secondary" />}
          {data && <TasksTable data={data} />}
        </Container>
      </Box>
    </Layout>
  );
};

export default Tasks;
