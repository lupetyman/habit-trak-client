import React from 'react';

import { Card, Col } from 'react-bootstrap';

const HabitCard = (props) => {
  return (
      <Col md={4}>
      <Card id='habit-card'>
        <Card.Img variant='top' src={props.img}/>
        <Card.Body>
          <Card.Text>
            {props.name}
          </Card.Text>
          <Card.Footer onClick={() => props.selectHabit(props.id)}>Category: {props.category}</Card.Footer>
        </Card.Body>
      </Card>
      </Col>
  );
};

export default HabitCard;
