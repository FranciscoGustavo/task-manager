import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { useAppState } from '../../store';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const CountDown = () => {
  const classes = useStyles();
  const { state } = useAppState();

  if (!state.countdown) return null;
  return ReactDOM.createPortal(
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Tarea en progreso" />
        <Divider />
        <Countdown
          date={Date.now() + 5000}
          autoStart={false}
          onPause={() => {}}
          renderer={({ api, hours, minutes, seconds, completed }) => {
            return (
              <>
                <CardContent className={classes.content}>
                  {completed ? (
                    <Typography variant="h1">Tarea finalizada</Typography>
                  ) : (
                    <Typography variant="h1">
                      {hours}:{minutes}:{seconds}
                    </Typography>
                  )}
                </CardContent>
                <Divider />
                <CardActions className={classes.actions}>
                  <Button color="secondary" onClick={api.stop}>
                    Cancelar
                  </Button>
                  {api.isStarted() && !api.isCompleted() && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={api.pause}
                    >
                      Pausar
                    </Button>
                  )}
                  {!api.isStarted() && !api.isCompleted() && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={api.start}
                    >
                      {api.isPaused() ? 'Reanudar' : 'Empezar'}
                    </Button>
                  )}
                  {api.isCompleted() && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={api.start}
                    >
                      Aceptar
                    </Button>
                  )}
                </CardActions>
              </>
            );
          }}
        />
      </Card>
    </Box>,
    document.getElementById('countdonw') as any
  );
};

export default CountDown;
