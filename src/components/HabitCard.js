import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';

const HabitCard = (props) => {
  let addButton;
  // Does the id of the habit match any of the user's habit_ids?
  let matchedHabit = props.userHabits.find(userHabit => userHabit.habit_id === props.habit.id)

  if (matchedHabit) {
    addButton = <Button
        style={{marginTop: '20px'}}
        size='lg'
        variant='danger'>My Habit
      </Button>
  } else {
    addButton = <Button
        onClick={() => props.addUserHabit(props.habit)}
        style={{marginTop: '20px'}}
        size='lg'
        variant='info'>Add Habit
      </Button>
  }

  return (
      <Col md={4}>
      <Card id='habit-card'>
        <Card.Img variant='top' src={props.habit.img}/>
        <Card.Body>
          <Card.Text>
            {props.habit.name}
          </Card.Text>
          <Card.Footer>Category: {props.habit.category}</Card.Footer>
          {addButton}
      </Card.Body>
      </Card>
      </Col>
  );
};

export default HabitCard;
