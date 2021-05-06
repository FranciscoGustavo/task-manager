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

type TasksTableProps = {
  data: Tasks;
};
const TasksTable: FC<TasksTableProps> = ({ data }) => {
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
                  <TableCell />
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
                        component={Link}
                        to={`/tasks/${id}`}
                        color="primary"
                      >
                        Más detalles
                      </Button>
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
