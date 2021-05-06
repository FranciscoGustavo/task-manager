import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

type TaskCardProps = {
  task: Task;
};
const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <ListItem>
      <ListItemText>
        {task.title} {task.timer}
      </ListItemText>
      <Button component={Link} to={`/tasks/${task.id}`}>
        Editar
      </Button>
    </ListItem>
  );
};

type TasksListProps = {
  data: Array<Task>;
};
const TasksList: FC<TasksListProps> = ({ data }) => {
  return (
    <Box>
      <Container>
        <List>
          {data.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default TasksList;
