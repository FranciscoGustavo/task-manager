import React, { FC } from 'react';
import { Layout, Header, FiltersBoard, TasksBoard } from '../../components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useStyles } from './styles';

const Tasks: FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <Header />
          <FiltersBoard />
          <TasksBoard />
        </div>
      </DndProvider>
    </Layout>
  );
};

export default Tasks;
