import React from 'react';

import { Form, Button } from 'react-bootstrap';

import UserHabitCard from '../components/UserHabitCard';

const UserHabitsContainer = (props) => {
  console.log("UserHabit component", props)

  let uniqueHabit = (
    props.habits.map(habit => habit.id === props.userHabit.habit_id ?
     <UserHabitCard key={habit.id} habit={habit} /> : null )
  );

  return (
    <React.Fragment>
      <div> <h3>Habit:</h3>
        {uniqueHabit} </div>
      <div>
        <h3>Goals:</h3>
        <p>How many times per day?</p>
        <p>How many times per week?</p>
      </div>
      <div>
        <h3>Progress:</h3>
        <p>Chart</p>
      </div>
    </React.Fragment>

  )
};

export default UserHabitsContainer;
