import React, { FC, ReactNode, useRef } from 'react';
import { Layout } from '../../components';
import DropWrapper from '../../components/DropWrapper';
import CardTask from '../../components/CardTask';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ITEMS = [
  {
    name: 'To do',
    tasks: [{}, {}, {}],
  },
  {
    name: 'In progress',
    tasks: [{}, {}, {}],
  },
  {
    name: 'Completed',
    tasks: [{}, {}, {}],
  },
];

type ColumnOfTaskProps = {
  title: string;
  children: ReactNode;
};

const useStylesColumn = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gap: '16px',
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(2),
    backgroundColor: 'red',
    padding: theme.spacing(1),
  },
}));

const ColumnOfTask: FC<ColumnOfTaskProps> = ({ title, children }) => {
  const classes = useStylesColumn();
  return <div className={classes.root}>{children}</div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '64px 64px 1fr',
    width: '100%',
    height: '100%',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: 'yellow',
  },
  containers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  const onDrop = () => {};

  return (
    <Layout>
      <DndProvider backend={HTML5Backend}>
        <div className={classes.root}>
          <header>Header</header>
          <div>
            <Typography variant="h4">Tareas</Typography>
          </div>
          <div className={classes.containers}>
            {ITEMS.map(({ name, tasks }) => (
              <div>
                <Typography variant="body1">{name}</Typography>
                <Button fullWidth startIcon={<AddIcon />} />
                <DropWrapper onDrop={onDrop} name={name}>
                  <ColumnOfTask title={name}>
                    {tasks.map((i, idx) => (
                      <CardTask key={idx} item={i} index={idx} status={name} />
                    ))}
                  </ColumnOfTask>
                </DropWrapper>
              </div>
            ))}
          </div>
        </div>
      </DndProvider>
    </Layout>
  );
};

export default Home;
