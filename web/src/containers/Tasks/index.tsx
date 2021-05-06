import React, { FC } from 'react';
import { Layout, Header, FiltersBoard, TasksList } from '../../components';
import { useTasks } from '../../hooks';
import { useStyles } from './styles';

const Tasks: FC = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useTasks();

  return (
    <Layout>
      <div className={classes.root}>
        <Header />
        <FiltersBoard />
        <TasksList data={data} />
      </div>
    </Layout>
  );
};

export default Tasks;
