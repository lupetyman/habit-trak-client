import React, { Component } from 'react';
import { Container, Form, FormControl, Button, Row } from 'react-bootstrap';

import HabitCard from '../components/HabitCard';


class HabitsContainer extends Component {

  handleChange = (event) => {
    this.props.setFilter(event.target.value)
  };

  handleFilter = (event) => {
    this.props.filterCategory(event.target.value)
  }

  render() {
    //Map through data, return as Habit Cards
    let habitList = (
      this.props.habits.map(habit => {
        return <HabitCard
          key={habit.id}
          habit={habit}
          habits={this.props.habits}
          addUserHabit={this.props.addUserHabit}
          userHabits={this.props.userHabits}/>
      })
    );

    return (
      <React.Fragment>
        <div className='habits-container'>
          <h2 style={{textAlign: 'center'}}>Select a habit to get started!</h2>
          {/* Search bar */}
          <Form inline id='search-bar' onSubmit={this.handleSubmit}>
            <FormControl
              className="mr-lg-2"
              // style={{width: '31.5%'}}
              name="filterValue"
              type="text"
              placeholder="Search"
              value={this.props.filterValue}
              onChange={this.handleChange}/>
            <Button type="submit">Search</Button>
          </Form>

          {/* Category Filter */}
          <span style={{marginLeft: '80px', fontWeight: 'bold'}}>Search by Category</span>
          <Form className='category-form'>
            <Form.Group controlId="weeklyHabitSelect">
              <Form.Control
                as="select"
                name='category'
                placeholder='Category'
                // value={this.props.category}
                onChange={this.handleFilter}>
                <option>All</option>
                <option>Coding</option>
                <option>Health</option>
                <option>Language</option>
                <option>Music</option>
              </Form.Control>
            </Form.Group>
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
