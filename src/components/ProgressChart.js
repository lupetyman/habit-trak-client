import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ProgressChart = (props) => {

  const data = [
    {x: `${props.activationCount}`, y: `${props.weeklyGoal}`}
  ]

  return (
    <div>
      <VictoryChart
        // theme={VictoryTheme.material}
        domainPadding={40}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
}}
      >
        <VictoryBar
          style={{
            data: {fill: 'tomato', width: 65}
          }}
          // data={data}
        />

        <VictoryAxis
          label={"ACTIVATIONS"}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[2, 4, 6, 8, 10]}
          label={"GOAL!"}
        />

      </VictoryChart>
    </div>
  )
}

export default ProgressChart;
