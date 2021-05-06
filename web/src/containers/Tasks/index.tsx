import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  Button,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Layout, FiltersBoard, TasksList } from '../../components';
import { useTasks } from '../../hooks';
import { useStyles } from './styles';

const Tasks: FC = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useTasks();

  return (
    <Layout>
      <Box className={classes.root}>
        <Container className={classes.container}>
          <Box>
            <Box>
              <IconButton>
                <FilterListIcon />
              </IconButton>
              <Button
                component={Link}
                to="/tasks/new"
                variant="contained"
                color="primary"
              >
                Nueva Tarea
              </Button>
            </Box>
          </Box>
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
        </Container>
      </Box>
    </Layout>
  );
};

export default Tasks;
