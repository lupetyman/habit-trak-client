import React, { Component } from 'react';
import axios from 'axios';

import { Form, Button, Card, Col } from 'react-bootstrap';

import ProgressChart from '../components/ProgressChart';

class UserHabitsContainer extends Component {

  state = {
    daily_goal: 0,
    weekly_goal: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit", this.props.userHabit)
    axios.put(`http://localhost:3001/user_habits/${this.props.userHabit.id}`, {
      ...this.props.userHabit,
      daily_goal: this.state.daily_goal,
      weekly_goal: this.state.weekly_goal
    })
    .then(response => {
      this.props.addGoals(response.data.user_habit)
    })
    .catch(err => console.log(err))
  }

  render() {
    let dailyValue;
    let weeklyValue;

    if (!this.props.userHabit.daily_goal) {
      dailyValue = this.state.daily_goal
    } else {
      dailyValue = this.props.userHabit.daily_goal
    }
    if (!this.props.userHabit.weekly_goal) {
      weeklyValue = this.state.weekly_goal
    } else {
      weeklyValue = this.props.userHabit.weekly_goal
    }

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
            <Button
              onClick={() => console.log("Activation click", this.props.userHabit)}
              variant='success'
              style={{color: 'yellow', fontWeight: 'bold', border: '3px solid yellow'}}
              size='lg'>Activate Habit!</Button>
            <Button
              onClick={() => this.props.deleteUserHabit(this.props.userHabit)}
              variant='danger'
              style={{color: 'black', fontWeight: 'bold', border: '3px solid yellow'}}
              size='lg'>Delete Habit</Button>
          </Card>
          </Col>
        </div>
        <div>
          <h3>Goals:</h3>
          <p>Current goals:<br /> {this.props.userHabit.daily_goal} times per day.<br /> {this.props.userHabit.weekly_goal} times per week.</p>
          <Form className='goal-form'>
            <Form.Group controlId="dailyHabitSelect">
              <Form.Label>How many times per day?</Form.Label>
              <Form.Control
                as="select"
                style={{width: '60%'}}
                name='daily_goal'
                value={dailyValue}
                onChange={this.handleChange}>
                <option>0</option>
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
              <Form.Control
                as="select"
                style={{width: '60%'}}
                name='weekly_goal'
                value={weeklyValue}
                onChange={this.handleChange}>
                <option>0</option>
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
          <Button
            type='submit'
            variant='info'
            size='lg'
            style={{color: 'black', fontWeight: 'bold', marginTop: '30px', width: '60%'}}
            onClick={this.handleSubmit}>Set Goals</Button>
        </div>
        <div>
          <h3>Progress:</h3>
          <ProgressChart />
        </div>
      </React.Fragment>
    )
  }
}

export default UserHabitsContainer;
