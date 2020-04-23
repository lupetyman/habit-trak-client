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
        <Form className='goal-form'>
          <Form.Group controlId="dailyHabitSelect">
            <Form.Label>How many times per day?</Form.Label>
            <Form.Control style={{width: '68%'}} as="select">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
           </Form.Control>
         </Form.Group>
        </Form>
        <Form className='goal-form'>
          <Form.Group controlId="weeklyHabitSelect">
            <Form.Label>How many times per week?</Form.Label>
            <Form.Control as="select" style={{width: '68%'}}>
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
             <option>6</option>
             <option>7</option>
           </Form.Control>
         </Form.Group>
        </Form>
        <p>Current goals:<br /> X times per day.<br /> X times per week.</p>
      </div>
      <div>
        <h3>Progress:</h3>
        <p>Chart</p>
      </div>
    </React.Fragment>

  )
};

export default UserHabitsContainer;
