import React, { FC } from 'react';
import { Formik } from 'formik';
import {
  Box,
  Grid,
  Card,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Select,
  InputLabel,
  InputBase,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';

type TaskFormProps = {
  onCloseModal: () => void;
  task: any;
};

const TaskForm: FC<TaskFormProps> = ({ onCloseModal, task }) => {
  const classes = useStyles();

  const onSubmit = (values: any) => {
    console.log('Guardando', values);
  };

  return (
    <Formik initialValues={task} validate={() => {}} onSubmit={onSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card className={classes.root}>
            <CardHeader title="Tarea" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="title"
                    name="title"
                    label="Titulo"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    name="description"
                    label="Descripción"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <Box>
                      <InputLabel id="timer">Temporizador</InputLabel>
                      <Select
                        labelId="timer"
                        id="timer"
                        name="timer"
                        input={<InputBase />}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <MenuItem value={0}>Personalizado</MenuItem>
                        <MenuItem value={30}>30 minutos</MenuItem>
                        <MenuItem value={45}>45 minutos</MenuItem>
                        <MenuItem value={60}>1 hora</MenuItem>
                      </Select>
                    </Box>
                    {values.timer !== 30 &&
                      values.timer !== 45 &&
                      values.timer !== 60 && (
                        <Box>
                          <InputLabel htmlFor="customTimer">Tiempo</InputLabel>
                          <InputBase
                            id="customTimer"
                            name="timer"
                            type="number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.timer}
                          />
                        </Box>
                      )}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button onClick={onCloseModal}>Cancelar</Button>
              <Button variant="contained" color="primary" type="submit">
                Guardar
              </Button>
            </CardActions>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default TaskForm;
