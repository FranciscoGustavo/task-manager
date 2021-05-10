import React, { useState, FC } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  Modal,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';

type DeleteTaskButtonProps = {
  removeTask: () => Promise<void>;
  reloadTasks: () => void;
};
const DeleteTaskButton: FC<DeleteTaskButtonProps> = ({
  removeTask,
  reloadTasks,
}) => {
  const classes = useStyles();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onHandleClick = () => {
    removeTask()
      .then(() => {
        reloadTasks();
      })
      .catch(() => setIsOpenModal(false));
  };

  return (
    <>
      <Button color="secondary" onClick={() => setIsOpenModal(true)}>
        Eliminar
      </Button>
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Box className={classes.containerCard}>
          <Card>
            <CardHeader title="¿Seguro quieres eliminar esta tarea?" />
            <CardActions>
              <Button onClick={() => setIsOpenModal(false)}>Cancelar</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={onHandleClick}
              >
                Aceptar
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteTaskButton;
