import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';

const UserHabitCard = (props) => {

  return (
      <Col md={4}>
      <Card id='user-habit-card'>
        <Card.Img variant='top' src={props.habit.img}/>
        <Card.Body>
          <Card.Text>
            {props.habit.name}
          </Card.Text>
          {/* <Card.Footer>Category: {props.habit.category}</Card.Footer> */}
      </Card.Body>
      <Button onClick={() => console.log('Clicky')}
        variant='success'
        style={{color: 'yellow', fontWeight: 'bold', border: '3px solid yellow'}}
        size='lg'>Activate Habit!</Button>
      </Card>
      </Col>
  );
};

export default UserHabitCard;
