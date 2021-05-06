import React, { FC } from 'react';
import { Layout, TaskForm } from '../../components';
import { useStyles } from './styles';

const Task: FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <TaskForm />
      </div>
    </Layout>
  );
};

export default Task;
