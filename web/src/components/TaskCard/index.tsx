import React, { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

type TaskCardProps = {
  task: any;
  onOpenTask: (task: any) => void;
};

const TaskCard: FC<TaskCardProps> = ({ task, onOpenTask }) => {
  return (
    <Card>
      <CardActionArea onClick={() => onOpenTask(task)}>
        <CardContent>
          <Typography variant="h5">{task.title + task.id}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
