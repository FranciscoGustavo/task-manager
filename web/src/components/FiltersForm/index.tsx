import React, { FC } from 'react';
import { Formik } from 'formik';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';

type FiltersFormProps = {
  filters: FiltersTask;
  getFilters: (filters: FiltersTask) => void;
  onClose: () => void;
};
const FiltersForm: FC<FiltersFormProps> = ({
  filters,
  getFilters,
  onClose,
}) => {
  const onSubmit = (values: any) => {
    getFilters(values);
    onClose();
  };

  return (
    <Formik initialValues={filters} validate={() => {}} onSubmit={onSubmit}>
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
          <Card>
            <CardHeader title="Filtros" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="startDate"
                    type="date"
                    name="startDate"
                    label="Del:"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={values.startDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="endDate"
                    type="date"
                    name="endDate"
                    label="Hasta:"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={values.endDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Select
                      id="timer"
                      name="timer"
                      label="Tiempo:"
                      fullWidth
                      value={values.timer}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="0">Personalizado</MenuItem>
                      <MenuItem value="30">30 minutos</MenuItem>
                      <MenuItem value="45">45 minutos</MenuItem>
                      <MenuItem value="60">1 hora</MenuItem>
                      <MenuItem value="all">Todos</MenuItem>
                    </Select>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Select
                      id="order"
                      name="order"
                      label="Ordenar por:"
                      fullWidth
                      value={values.order}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="ASC">Acendente</MenuItem>
                      <MenuItem value="DESC">Decendente</MenuItem>
                    </Select>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Button color="secondary" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Aceptar
              </Button>
            </CardActions>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default FiltersForm;
