import React from 'react';

import { Card } from 'react-bootstrap';

const HabitCard = (props) => {
  return (
      <Card id='habit-card'>
        <Card.Img variant='top' src={props.img}/>
        <Card.Body>
          <Card.Text>
            {props.name}
          </Card.Text>
          <Card.Footer>Category: {props.category}</Card.Footer>
        </Card.Body>
      </Card>
  );
};

export default HabitCard;
