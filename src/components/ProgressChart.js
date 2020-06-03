import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ProgressChart = (props) => {
  
  const data = [
    {x: `${props.weeklyGoal}`, y: `${props.activationCount}`}
  ]

  return (
    <div>
      <VictoryChart
        // theme={VictoryTheme.material}
        domainPadding={80}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
}}
      >

        <VictoryAxis
          tickValues={[1]}
          tickFormat={["Activations"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={["Goal"]}
        />

        <VictoryBar
          style={{
            data: {fill: 'green'}
          }}
          data={data}
        />
      </VictoryChart>
    </div>
  )
}

export default ProgressChart;
