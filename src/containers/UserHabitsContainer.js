import React, { Component } from 'react';

import { Form, Button, Card, Col } from 'react-bootstrap';

class UserHabitsContainer extends Component {

  state = {
    dailyGoal: 0,
    weeklyGoal: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log("UH Container state", this.state)
    console.log("UH Container props", this.props)

    return (
      <React.Fragment>
        <div>
          <h3>Habit:</h3>
          <Col md={4}>
          <Card id='user-habit-card'>
            <Card.Img variant='top' src={this.props.userHabit.img}/>
            <Card.Body>
              <Card.Text>
                {this.props.userHabit.name}
              </Card.Text>
            </Card.Body>
            <Button onClick={() => console.log("Activation click", this.props.userHabit)}
            variant='success'
            style={{color: 'yellow', fontWeight: 'bold', border: '3px solid yellow'}}
            size='lg'>Activate Habit!</Button>
            <Button onClick={() => this.props.deleteUserHabit(this.props.userHabit)}
              variant='danger'
              style={{color: 'black', fontWeight: 'bold', border: '3px solid yellow'}}
              size='lg'>Delete Habit</Button>
          </Card>
          </Col>
        </div>
        <div>
          <h3>Goals:</h3>
          <Form className='goal-form' onChange={this.handleChange}>
            <Form.Group controlId="dailyHabitSelect">
              <Form.Label>How many times per day?</Form.Label>
              <Form.Control style={{width: '68%'}} as="select" name='dailyGoal'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Form className='goal-form' onChange={this.handleChange}>
            <Form.Group controlId="weeklyHabitSelect">
              <Form.Label>How many times per week?</Form.Label>
              <Form.Control as="select" style={{width: '68%'}} name='weeklyGoal'>
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
          <p>Current goals:<br /> {this.state.dailyGoal} times per day.<br /> {this.state.weeklyGoal} times per week.</p>
        </div>
        <div>
          <h3>Progress:</h3>
          <p>Chart</p>
        </div>
      </React.Fragment>
    )
  }
}

export default UserHabitsContainer;
