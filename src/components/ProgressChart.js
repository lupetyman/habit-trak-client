import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ProgressChart = (props) => {
  const data = [
    {goal: props.dailyGoal, activations: props.activationCount},
    {goal: props.weeklyGoal, activations: props.activationCount},
  ]
  console.log("Chart", props)
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={80}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
}}
      >
        <VictoryAxis
          tickValues={[1, 2]}
          tickFormat={["Today", "Weekly"]}
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
