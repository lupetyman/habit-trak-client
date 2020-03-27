import React, { Component } from 'react';
import { CardColumns, Col, Container, Form, FormControl, Button, Row } from 'react-bootstrap';
import axios from 'axios';

import HabitCard from '../components/HabitCard';


class HabitsContainer extends Component {

  state = {
    habits: []
  }

  componentDidMount() {
    this.fetchHabits()
  };

  fetchHabits = () => {
    axios.get('http://localhost:3001/habits')
    .then(response => {
      this.setState({
        habits: response.data.habits
      })
    })
  };


  render() {
    let habit = (
      this.state.habits.map(habit => {
        return <HabitCard key={habit.id} {...habit}/>
      })
    );

    return (
      <React.Fragment>
        <div className='container'>
          <Form inline id='search-bar'>
            <FormControl type="text" placeholder="Search" className=" mr-lg-2" style={{width: '33%'}}/>
            <Button type="submit">Submit</Button>
          </Form>
          <Container>
            <Row>
              <CardColumns id='card-cols'>
                {habit}
              </CardColumns>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  };
}

export default HabitsContainer;
