import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { VictoryChart, VictoryLine } from 'victory';
import { Layout } from '../../components';
import { useChartWithTasks } from '../../hooks';

const Home: FC = () => {
  const { data, isLoading, error } = useChartWithTasks();
  return (
    <Layout>
      <Box>
        <VictoryChart>
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
