import React, { FC } from 'react';
import { Formik } from 'formik';
import {
  Box,
  Container,
  Grid,
  Card,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';

type TaskFormProps = {
  task: Task;
  onSaveTask: (task: Task) => void;
};
const TaskForm: FC<TaskFormProps> = ({ task, onSaveTask }) => {
  const classes = useStyles();

  const onSubmit = (values: Task & { customTimer: number | string }) => {
    const prevTask: Task = {
      id: values.id,
      title: values.title,
      description: values.description,
      timer: String(values.timer === '0' ? values.customTimer : values.timer),
      tag: values.tag,
    };
    onSaveTask(prevTask);
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.center}>
        <Formik
          initialValues={{ ...task, customTimer: '' }}
          validate={() => {}}
          onSubmit={onSubmit}
        >
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
              <Card className={classes.card}>
                <CardHeader title="Task" />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="title"
                        name="title"
                        label="Titulo"
                        variant="outlined"
                        fullWidth
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="description"
                        name="description"
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Select
                        labelId="timer"
                        id="timer"
                        name="timer"
                        label="Temporizador"
                        variant="outlined"
                        fullWidth
                        value={values.timer}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <MenuItem value="0">Personalizado</MenuItem>
                        <MenuItem value="30">30 minutos</MenuItem>
                        <MenuItem value="45">45 minutos</MenuItem>
                        <MenuItem value="60">1 hora</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="customTimer"
                        name="customTimer"
                        label="Escribe el tiempo en minutos"
                        type="number"
                        variant="outlined"
                        fullWidth
                        disabled={values.timer !== '0'}
                        value={values.customTimer}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <Button color="secondary">Cancelar</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Guaradar
                  </Button>
                </CardActions>
              </Card>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default TaskForm;
