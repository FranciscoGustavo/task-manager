import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import dayjs from 'dayjs';
import DeleteTaskButton from '../DeleteTaskButton';
import StartTaskButton from '../StartTaskButton';

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
                  <TableCell>Estado</TableCell>
                  <TableCell>Tarea creada</TableCell>
                  <TableCell colSpan={3}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  ({ id, title, description, timer, tag, createdAt }) => (
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
                        <Chip
                          label={tag === 'to do' ? 'Pendiente' : 'Completada'}
                          color={tag === 'to do' ? 'primary' : 'secondary'}
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell>
                        {dayjs(createdAt).format('DD-MM-YYYY')}
                      </TableCell>
                      <TableCell>
                        <StartTaskButton
                          task={{ id, title, description, timer, tag }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          component={Link}
                          to={`/tasks/${id}`}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <DeleteTaskButton
                          removeTask={() => removeTask(id)}
                          reloadTasks={reloadTasks}
                        />
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </Box>
        </Card>
      </Card>
    </Box>
  );
};

export default TasksTable;
