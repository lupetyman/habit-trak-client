import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, Col } from 'react-bootstrap';

import ProgressChart from '../components/ProgressChart';


class UserHabitsContainer extends Component {

  state = {
    activationCount: this.props.userHabit.activation_count,
    weeklyGoal: this.props.userHabit.weekly_goal
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:3001/user_habits/${this.props.userHabit.id}`, {
      ...this.props.userHabit,
      weekly_goal: this.state.weeklyGoal
    })
    .then(response => {
      this.props.updateUserHabits(response.data.user_habit)
    })
    .catch(err => console.log(err))
  }

  handleActivate = () => {
    this.setState({
      activationCount: ++this.state.activationCount
    })
    axios.put(`http://localhost:3001/user_habits/${this.props.userHabit.id}`, {
      ...this.props.userHabit,
      activation_count: this.state.activationCount
    })
    .then(response => {
      this.props.updateUserHabits(response.data.user_habit)
    })
    .catch(err => console.log(err))
  }

  render() {

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
              onClick={this.handleActivate}
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

        <div style={{marginLeft: '80px'}}>
          <h3>Goals:</h3>
          <div style={{marginTop: '60px'}}>
            <p>Currently:<br /> {this.state.weeklyGoal} times per week.<br /></p>
          </div>
          <Form className='goal-form' style={{marginTop: '20px'}}>
            <Form.Group controlId="weeklyHabitSelect">
              <Form.Label>Choose weekly goal:</Form.Label>
              <Form.Control
                as="select"
                style={{width: '60%'}}
                name='weeklyGoal'
                value={this.state.weeklyGoal}
                onChange={this.handleChange}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button
            type='submit'
            variant='info'
            size='lg'
            style={{color: 'black', fontWeight: 'bold', width: '60%'}}
            onClick={this.handleSubmit}>Set Goal
          </Button>
          <div style={{marginTop: '80px'}}>
            <p>Number of activations:<br /> {this.state.activationCount} activation(s) this week.</p>
          </div>

        </div>

        <div>
          <h3 style={{marginLeft: '80px'}}>Progress:</h3>
          <ProgressChart
            activationCount={this.state.activationCount}
            weeklyGoal={this.state.weeklyGoal}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default UserHabitsContainer;
