import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressChart = (props) => {
  console.log("Chart", props)

  return (
    <div>
      <p style={{fontWeight: 'bold', textAlign: 'center'}}>{Math.floor((props.activationCount / props.weeklyGoal) * 100)}% to Goal!</p>
      <ProgressBar
        animated
        max={props.weeklyGoal}
        now={props.activationCount}
        style={{
          height: '180px',
          marginTop: '140px',
          border: '3px solid black',
          transform: 'rotate(270deg)',
          borderRadius: '10px',
          backgroundColor: 'grey'}}/>
    </div>
  )
}

export default ProgressChart;
