import React, { useState, useEffect, FC } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Modal,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DropWrapper from '../../components/DropWrapper';
import DragWrapper from '../../components/DragWrapper';
import TaskForm from '../../components/TaskForm';
import { useTasks, useDropWrapper } from '../../hooks';
import { TAGS } from '../../data';
import { useStyles } from './styles';

const TasksBoard: FC = () => {
  const classes = useStyles();
  const [tasks, loading, error] = useTasks();
  const [onDrop, moveItem, setItems, items] = useDropWrapper([]);

  const [isModalOpen, setModal] = useState(false);
  const [currentTask, setTask] = useState<any>(false);

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

  const onOpenModal = () => {
    setTask(false);
    setModal(true);
  };
  const onCloseModal = () => {
    setTask({ title: '', description: '', timer: '' });
    setModal(false);
  };
  const onOpenTask = (task: any) => {
    setTask(task);
    setModal(true);
  };

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Cargando</h1>;
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4} className={classes.grid}>
          {TAGS.map(({ id: idTag, name }) => (
            <Grid key={idTag} item xs={4} className={classes.grid}>
              <Box className={classes.column}>
                <Typography variant="h6">{name}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                  startIcon={<AddIcon />}
                  onClick={onOpenModal}
                />
                <DropWrapper onDrop={onDrop} name={name}>
                  <div
                    style={{
                      display: 'grid',
                      gap: '16px',
                    }}
                  >
                    {items
                      .filter(({ tag }: any) => tag === name)
                      .map((task: any, idx: any) => (
                        <DragWrapper
                          key={task.id}
                          index={idx}
                          item={task}
                          moveItem={moveItem}
                          onOpenTask={onOpenTask}
                        />
                      ))}
                  </div>
                </DropWrapper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TaskForm onCloseModal={onCloseModal} task={currentTask} />
      </Modal>
    </Box>
  );
};

export default TasksBoard;
