import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Layout, TaskForm, CircularLoader } from '../../components';
import { useTask } from '../../hooks';
import { useStyles } from './styles';

const Task: FC = () => {
  const classes = useStyles();
  const params = useParams<{ id: string }>();
  const { data, isLoading, error, save } = useTask(params.id);

  return (
    <Layout>
      <div className={classes.root}>
        {error && <Typography>Ups algo salio mal</Typography>}
        {isLoading && <CircularLoader />}
        {typeof data !== 'boolean' && (
          <TaskForm task={data} onSaveTask={save} />
        )}
      </div>
    </Layout>
  );
};

export default Task;
