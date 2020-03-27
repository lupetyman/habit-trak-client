import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';


class HabitsContainer extends Component {

  state = {
    habits: []
  }

  fetchHabits = () => {
    axios.get('http://localhost:3001/habits')
    .then(response => {
      console.log(response)
      // this.setState({
      //   habits: response
      // })
    })
  };


  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div>
            Search Bar
          </div>
          <div>
            {/* Fetch habits, map and output as cards */}
            Habit Container
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default HabitsContainer;
