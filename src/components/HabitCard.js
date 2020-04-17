import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';

const HabitCard = (props) => {

  return (
      <Col md={4}>
      <Card id='habit-card'>
        <Card.Img variant='top' src={props.img}/>
        <Card.Body>
          <Card.Text>
            {props.name}
          </Card.Text>
          <Card.Footer>Category: {props.category}</Card.Footer>
        <Button onClick={() => props.addUserHabit(props)}>Add Habit</Button>
      </Card.Body>
      </Card>
      </Col>
  );
};

export default HabitCard;
