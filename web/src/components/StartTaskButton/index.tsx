import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { useAppState } from '../../store';
import { addCountdown } from '../../store/actions';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
      <IconButton color="primary" onClick={onHandleClick}>
        <PlayArrowIcon />
      </IconButton>
    </>
  );
};

export default StartTaskButton;
