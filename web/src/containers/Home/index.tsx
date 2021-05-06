import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { VictoryChart, VictoryLine } from 'victory';
import { Layout } from '../../components';

const Home: FC = () => {
  return (
    <Layout>
      <Box>
        <VictoryChart>
          <VictoryLine
            style={{
              data: { stroke: 'tomato' },
            }}
            data={[
              { a: new Date(1982, 1, 1), b: 125 },
              { a: new Date(1987, 1, 1), b: 257 },
              { a: new Date(1993, 1, 1), b: 345 },
              { a: new Date(1997, 1, 1), b: 515 },
              { a: new Date(2001, 1, 1), b: 132 },
              { a: new Date(2005, 1, 1), b: 305 },
              { a: new Date(2011, 1, 1), b: 270 },
              { a: new Date(2015, 1, 1), b: 470 },
            ]}
            x="a"
            y="b"
          />
        </VictoryChart>
      </Box>
    </Layout>
  );
};

export default Home;
