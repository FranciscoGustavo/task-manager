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

const TaskForm: FC = () => {
  const classes = useStyles();

  return (
    <Formik initialValues={{}} validate={() => {}} onSubmit={() => {}}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Card className={classes.root}>
          <CardHeader title="Tarea" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Titulo" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Descripción" fullWidth />
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
                    <InputLabel id="demo-customized-select-label">
                      Tiempo
                    </InputLabel>
                    <Select
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      input={<InputBase />}
                    >
                      <MenuItem value={30}>Personalizado</MenuItem>
                      <MenuItem value={30}>30 minutos</MenuItem>
                      <MenuItem value={45}>45 minutos</MenuItem>
                      <MenuItem value={60}>1 hora</MenuItem>
                    </Select>
                  </Box>
                  <Box>
                    <InputLabel htmlFor="demo-customized-textbox">
                      Tiempo
                    </InputLabel>
                    <InputBase id="demo-customized-textbox" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button>Cancelar</Button>
            <Button variant="contained">Guardar</Button>
          </CardActions>
        </Card>
      )}
    </Formik>
  );
};

export default TaskForm;
