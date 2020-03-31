import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Navtool from './components/Navtool';
import Login from './components/Login';
import Signup from './components/Signup';
import HabitsContainer from './containers/HabitsContainer';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: {},
    habits: [],
    selectedHabit: null
  };

  //Check if user is logged in, fetch habits.
  componentDidMount() {
    this.loginStatus()
    this.fetchHabits()
  };

  //Fetch login status from Rails server.
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('API error:', error))
  };

  // Handle user log in and out.
  handleLogin = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.data.user
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  };

  //Fetch habits and alphabetize
  fetchHabits = () => {
    axios.get('http://localhost:3001/habits')
    .then(response => {
      this.setState({
        habits: response.data.habits.sort(function(a, b) {
           if(a.name < b.name) {return -1;}
           if(a.name > b.name) {return 1;}
           return 0;
        })
      })
    })
  };

  //Select a habit to add to profile
  selectHabit = (habitID) => {
    const foundHabit = this.state.habits.find(habit => habit.id === habitID)
    this.setState({
      selectedHabit: foundHabit
    })
  }

  render() {
    // console.log("render", this.state.user)
    // if (!this.state.user) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
      <BrowserRouter>
        <Navtool />
        <Switch>

          <Route exact path='/'
          render={() => <Home
          loggedInStatus={this.state.isLoggedIn}/>}
          />

          <Route exact path='/login'
          render={() => <Login
          handleLogin={this.handleLogin}
          loggedInStatus={this.state.isLoggedIn}/>}
          />

          <Route exact path='/signup'
          render={() => <Signup
          handleLogin={this.handleLogin}
          loggedInStatus={this.state.isLoggedIn}/>}
          />

          <Route exact path='/habits'
          render={() => <HabitsContainer
          habits={this.state.habits}
          selectHabit={this.selectHabit}/>}/>

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
