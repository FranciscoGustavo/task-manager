import React, { useState, FC } from 'react';
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DropWrapper from '../../components/DropWrapper';
import TaskCard from '../../components/TaskCard';
import { TAGS, TASKS } from '../../data';
import { useStyles } from './styles';

const TasksBoard: FC = () => {
  const classes = useStyles();

  const [items, setItems] = useState(TASKS);

  const onDrop = (item: any, monitor: any, tag: any) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((task) => task.id !== item.id)
        .concat({ ...item, tag });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex: any, hoverIndex: any) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((task, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4} className={classes.grid}>
          {TAGS.map(({ name }) => (
            <Grid item xs={4} className={classes.grid}>
              <Box className={classes.column}>
                <Typography variant="h6">{name}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                  startIcon={<AddIcon />}
                />
                <DropWrapper onDrop={onDrop} name={name}>
                  <div>
                    {items
                      .filter(({ tag }) => tag === name)
                      .map((task, idx) => (
                        <TaskCard
                          key={task.id}
                          item={task}
                          index={idx}
                          tag={name}
                          moveItem={moveItem}
                        />
                      ))}
                  </div>
                </DropWrapper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TasksBoard;
