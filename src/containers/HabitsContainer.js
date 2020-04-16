import React, { Component } from 'react';
import { Container, Form, FormControl, Button, Row } from 'react-bootstrap';

import HabitCard from '../components/HabitCard';


class HabitsContainer extends Component {

  handleChange = (event) => {
    this.props.setFilter(event.target.value)
  };

  render() {
    console.log(this.props.habits)

    //Map through data, return as Habit Cards
    let habitList = (
      this.props.habits.map(habit => {
        return <HabitCard key={habit.id} {...habit} selectHabit={this.props.selectHabit}/>
      })
    );

    return (
      <React.Fragment>
        <div className='container'>
          <h2 style={{textAlign: 'center'}}>Select a habit to get started!</h2>
          <Form inline id='search-bar' onSubmit={this.handleSubmit}>
            <FormControl
              className="mr-lg-2"
              style={{width: '31.5%'}}
              name="filterValue"
              type="text"
              placeholder="Search"
              value={this.props.filterValue}
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
