import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ProgressChart = () => {
  const data = [
    {goal: 1, activations: 1},
    {goal: 2, activations: 5},
  ]

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={100}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
}}
      >
        <VictoryAxis
          tickValues={[1, 2]}
          tickFormat={["Daily", "Weekly"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}x`)}
        />

        <VictoryBar
          style={{
            data: {fill: 'green'}
          }}
          data={data}
          x="goal"
          y="activations"
        />
      </VictoryChart>
    </div>
  )
}

export default ProgressChart;
