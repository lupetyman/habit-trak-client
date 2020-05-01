import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';

const UserHabitCard = (props) => {
  console.log("UserHabit card", props)
  return (
      <Col md={4}>
      <Card id='user-habit-card'>
        <Card.Img variant='top' src={props.userHabit.img}/>
        <Card.Body>
          <Card.Text>
            {props.userHabit.name}
          </Card.Text>
      </Card.Body>
      <Button onClick={() => console.log("Activation click", props.userHabit)}
        variant='success'
        style={{color: 'yellow', fontWeight: 'bold', border: '3px solid yellow'}}
        size='lg'>Activate Habit!</Button>
        <Button onClick={() => props.deleteUserHabit(props.userHabit)}
          variant='danger'
          style={{color: 'black', fontWeight: 'bold', border: '3px solid yellow'}}
          size='lg'>Delete Habit</Button>
      </Card>
      </Col>
  );
};

export default UserHabitCard;
