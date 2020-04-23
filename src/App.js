import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Navtool from './components/Navtool';
import Login from './components/Login';
import Signup from './components/Signup';
import HabitsContainer from './containers/HabitsContainer';
import UserPage from './components/UserPage';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: {},
    habits: [],
    filteredHabits: [],
    filterValue: '',
    userHabits: []
  };

  //Check if user is logged in, fetch habits.
  componentDidMount() {
    this.loginStatus()
    this.fetchHabits()
    this.fetchUserHabits()
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

  //Filter Habits
  setFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    })
  }

  applyFilter = () => {
    return this.state.habits.filter(habit => {
      return habit.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
    })
  }

  //Fetch user habits
  fetchUserHabits = () => {
    axios.get('http://localhost:3001/user_habits')
    .then(response => {
      console.log("Fetch User Habits", response)
      this.setState({
        userHabits: response.data.user_habits
        })
    })
  };

  //Select a habit to add to profile
  selectHabit = (habitObj) => {
    const foundHabit = this.state.habits.find(habit => habit.id === habitObj.habit_id)
    // user.habits.push(foundHabit) - Update user object with habit (need serializer)
    // Update userHabit array:
    const updatedHabits = [...this.state.userHabits, foundHabit]
    this.setState({
      userHabits: updatedHabits
    })
  }

  // Join habit and user in backend
  addUserHabit = (habitObj) => {
    axios.post('http://localhost:3001/user_habits', {
      user_id: this.state.user.id,
      habit_id: habitObj.id
    })
      .then(response => {
        this.selectHabit(response.data.user_habit)
        console.log("POST", response.data.user_habit)
      })
  }

  render() {
    console.log("Render", this.state)
    return (
      <div>
      <BrowserRouter>
        <Navtool isLoggedIn={this.state.isLoggedIn} logOut={this.handleLogout} />
        <Switch>

          <Route exact path='/'
          render={() => <Home
          loggedInStatus={this.state.isLoggedIn}/>}
          />

          <Route path={`/users/${this.state.user.id}`}
          render={() => <UserPage
          handleLogin={this.handleLogin}
          user={this.state.user}
          loggedInStatus={this.state.isLoggedIn}
          habits={this.state.habits}
          userHabits={this.state.userHabits}/>}
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
          habits={this.applyFilter()}
          addUserHabit={this.addUserHabit}
          setFilter={this.setFilter}
          filterValue={this.state.filterValue}/>}
          />

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
