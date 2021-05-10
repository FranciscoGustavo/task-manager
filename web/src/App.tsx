import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CountDown } from './components';
import { ROUTES } from './router';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
}));

const App: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          {ROUTES.map((rest) => (
            <Route key={rest.path} {...rest} />
          ))}
        </Switch>
      </Router>
      <CountDown />
    </div>
  );
};

export default App;
