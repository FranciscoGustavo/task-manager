import React, { FC } from 'react';
import { Layout, FiltersBoard /* TasksBoard */ } from '../../components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useStyles } from './styles';

const Board: FC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <FiltersBoard />
        </div>
      </DndProvider>
    </Layout>
  );
};

export default Board;
