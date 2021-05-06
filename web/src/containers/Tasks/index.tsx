import React, { FC } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { Layout, TasksTable, ToolBar, CircularLoader } from '../../components';
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
          {isLoading && <CircularLoader />}
          {data && <TasksTable data={data} />}
        </Container>
      </Box>
    </Layout>
  );
};

export default Tasks;
