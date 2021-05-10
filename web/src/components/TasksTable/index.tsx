import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@material-ui/core';
import DeleteTaskButton from '../DeleteTaskButton';

type TasksTableProps = {
  data: Tasks;
  reloadTasks: () => void;
  removeTask: (id?: number | string) => Promise<void>;
};
const TasksTable: FC<TasksTableProps> = ({ data, reloadTasks, removeTask }) => {
  return (
    <Box>
      <Card>
        <Card>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Titulo</TableCell>
                  <TableCell>Tiempo</TableCell>
                  <TableCell colSpan={3}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(({ id, title, timer }) => (
                  <TableRow key={id} hover>
                    <TableCell>{title}</TableCell>
                    <TableCell>
                      <Chip
                        label={`${timer} minutos`}
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        disableElevation
                        color="primary"
                      >
                        Empezar tarea
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/tasks/${id}`}
                        color="primary"
                      >
                        Más detalles
                      </Button>
                    </TableCell>
                    <TableCell>
                      <DeleteTaskButton
                        removeTask={() => removeTask(id)}
                        reloadTasks={reloadTasks}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};

export default TasksTable;
