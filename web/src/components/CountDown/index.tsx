import React, { useState, FC } from 'react';
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
import { removeCountdown } from '../../store/actions';
import { useTask } from '../../hooks';
import { useStyles } from './styles';

const CountDownContainer = ({ children }: any) => {
  const classes = useStyles();
  const { state } = useAppState();

  if (!state.countdown) return null;
  return ReactDOM.createPortal(
    <Box className={classes.root}>{children}</Box>,
    document.getElementById('countdonw') as any
  );
};

const CountDown: FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useAppState();
  const [isCountDownFinished, setIsCountDownFinished] = useState(false);
  const [isCountDownStarted, setIsCountDownStarted] = useState<number | false>(
    false
  );
  const { save } = useTask();

  const onHandleFinish = () => {
    save({
      ...(state.countdown as Task),
      started: isCountDownStarted as number,
      finished: Date.now(),
    }).then(() => {
      dispatch(removeCountdown());
    });
  };

  const onHandleStart = (startCountDown: () => void) => {
    if (!isCountDownStarted) {
      setIsCountDownStarted(Date.now());
    }
    startCountDown();
  };

  const onHandleCancel = () => {
    setIsCountDownFinished(false);
    dispatch(removeCountdown());
  };

  const onHandleAcepted = () => {};

  return (
    <CountDownContainer>
      <Card className={classes.card}>
        <CardHeader title="Tarea en progreso" />
        <Divider />
        <Countdown
          date={
            Date.now() +
            Number(state.countdown && state.countdown.timer) * 60000
          }
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
                  <Button color="secondary" onClick={onHandleCancel}>
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
                  {!api.isStarted() &&
                    !api.isCompleted() &&
                    !isCountDownFinished && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => onHandleStart(api.start)}
                      >
                        {api.isPaused() ? 'Reanudar' : 'Empezar'}
                      </Button>
                    )}
                  {api.isStarted() && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => onHandleFinish()}
                    >
                      Finalizar
                    </Button>
                  )}
                  {api.isCompleted() && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onHandleAcepted}
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
    </CountDownContainer>
  );
};

export default CountDown;
