import React, { Component } from 'react';
import { Container, Form, FormControl, Button, Row } from 'react-bootstrap';

import HabitCard from '../components/HabitCard';


class HabitsContainer extends Component {

  handleChange = (event) => {
    let search = event.target.value;
    console.log(search);
  }

  render() {
    let habitList = (
      this.props.habits.map(habit => {
        return <HabitCard key={habit.id} {...habit} selectHabit={this.props.selectHabit}/>
      })
    );

    return (
      <React.Fragment>
        <div className='container'>
          <Form inline id='search-bar'>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-lg-2"
              style={{width: '33%'}}
              onChange={this.handleChange}/>
            <Button type="submit">Submit</Button>
          </Form>

          <Container id='card-container'>
            <Row>
              {habitList}
            </Row>
          </Container>

        </div>
      </React.Fragment>
    );
  };
}

export default HabitsContainer;
