import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';

const UserHabitCard = (props) => {
  console.log("UserHabitCard", props)
  return (
      <Col md={4}>
      <Card id='habit-card'>
        <Card.Img variant='top' src={props.habit.img}/>
        <Card.Body>
          <Card.Text>
            {props.name}
          </Card.Text>
          <Card.Footer>Category: {props.habit.category}</Card.Footer>
        {/* <Button onClick={() => props.addUserHabit(props)}>Add Habit</Button> */}
      </Card.Body>
      </Card>
      </Col>
  );
};

export default UserHabitCard;
