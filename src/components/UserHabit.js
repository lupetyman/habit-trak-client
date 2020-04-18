import React from 'react';

import UserHabitCard from './UserHabitCard';

const UserHabit = (props) => {
  console.log("UserHabit component", props)

  let uniqueHabit = (
    props.habits.map(habit => habit.id === props.userHabit.habit_id ?
     <UserHabitCard key={habit.id} habit={habit} /> : null )
  );

  return (
    <div>ID: {uniqueHabit} </div>
  )
};

export default UserHabit;
