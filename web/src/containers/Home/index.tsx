import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
} from 'victory';
import { Layout } from '../../components';
import { useChartWithTasks } from '../../hooks';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
}));

const Home: FC = () => {
  const classes = useStyles();
  const { data } = useChartWithTasks();

  return (
    <Layout>
      <Box className={classes.root}>
        <VictoryChart
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={{ x: [new Date('2021-5-1').getTime(), Date.now()] }}
            />
          }
        >
          <VictoryAxis
            tickFormat={(x) => dayjs(x).format('DD/MM/YYYY')}
            label="Dias"
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `${x}`}
            label="Tareas"
          />
          <VictoryLine
            style={{
              data: { stroke: 'tomato' },
            }}
            data={data}
            x="a"
            y="b"
          />
        </VictoryChart>
      </Box>
    </Layout>
  );
};

export default Home;
