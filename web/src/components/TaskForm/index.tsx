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
  InputLabel,
  InputBase,
  MenuItem,
} from '@material-ui/core';
import { useTask } from '../../hooks';
import { useStyles } from './styles';

type TaskFormProps = {
  onCloseModal?: () => void;
  task?: any;
};

const TaskForm: FC<TaskFormProps> = () => {
  const classes = useStyles();
  // const [saveTask] = useTask();

  const onSubmit = (values: any) => {
    // saveTask(values);
    console.log('Guardando', values);
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.center}>
        <Formik initialValues={{}} validate={() => {}} onSubmit={onSubmit}>
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
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="description"
                        name="description"
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel id="timer">Temporizador</InputLabel>
                        <Select
                          labelId="timer"
                          id="timer"
                          name="timer"
                          input={<InputBase />}
                        >
                          <MenuItem value={0}>Personalizado</MenuItem>
                          <MenuItem value={30}>30 minutos</MenuItem>
                          <MenuItem value={45}>45 minutos</MenuItem>
                          <MenuItem value={60}>1 hora</MenuItem>
                        </Select>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="customTimer"
                        name="timer"
                        type="number"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <Button color="secondary">Cancelar</Button>
                  <Button variant="contained" color="primary">
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
