import React, { FC } from 'react';
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DropWrapper from '../../components/DropWrapper';
import { TAGS } from '../../data';
import { useStyles } from './styles';

const TasksBoard: FC = () => {
  const classes = useStyles();

  const onDrop = () => {};

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4} className={classes.grid}>
          {TAGS.map(({ name }) => (
            <Grid item xs={4} className={classes.grid}>
              <Box className={classes.column}>
                <Typography variant="h6">{name}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  disableElevation
                  fullWidth
                  startIcon={<AddIcon />}
                />
                <DropWrapper onDrop={onDrop} name={name}>
                  <div>
                    {new Array(3).fill(1).map(() => (
                      <Typography variant="h6">{name}</Typography>
                    ))}
                  </div>
                </DropWrapper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TasksBoard;
