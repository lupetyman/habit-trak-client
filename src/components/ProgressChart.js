import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressChart = (props) => {

  let goal = props.activationCount

  if (goal === null) {
    goal = 0;
  } else {
    goal = props.activationCount;
  }

  let percent = props.weeklyGoal;

  if (isNaN(props.weeklyGoal)) {
    percent = 0;
  } else {
    percent = props.weeklyGoal;
  }

  let goalPercent = Math.floor((goal / percent) * 100);



console.log("Chart", percent)
  return (
    <div>
      <p style={{fontWeight: 'bold', textAlign: 'center'}}>
        {goalPercent ? goalPercent : '0'}% to Goal!</p>
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
