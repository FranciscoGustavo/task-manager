import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useAppState } from '../../store';
import { addCountdown } from '../../store/actions';

type StartTaskButtonProps = {
  task: Task;
};
const StartTaskButton: FC<StartTaskButtonProps> = ({ task }) => {
  const { dispatch } = useAppState();

  const onHandleClick = () => {
    dispatch(addCountdown(task));
  };

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        onClick={onHandleClick}
      >
        Empezar tarea
      </Button>
    </>
  );
};

export default StartTaskButton;
