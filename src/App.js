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
    userHabits: [],
    category: ''
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
    .catch(err => console.log(err))
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

  filterCategory = (newCategory) => {
    this.setState({
      category: newCategory
    })
    console.log("Filter category", this.state.habits)
    if (this.state.category === 'All') {
      this.setState({
        habits: this.state.habits
      })
    } else {
      const habitsByCategories = this.state.habits.filter(habit => {
        return habit.category === newCategory
      })
      this.setState({
        habits: habitsByCategories
      })
    }
  }

  //Fetch user habits
  fetchUserHabits = () => {
    axios.get('http://localhost:3001/user_habits')
    .then(response => {
      // filter habits specific to logged in user
      const foundUserHabits = response.data.user_habits.filter(userHabit => userHabit.user_id === this.state.user.id)
      this.setState((state, props) => ({
        userHabits: foundUserHabits
      }))
    })
    .catch(err => console.log(err))
  };

  // Select a habit and link user in backend
  addUserHabit = (habitObj) => {
    console.log("Add", habitObj)
    axios.post('http://localhost:3001/user_habits', {
      user_id: this.state.user.id,
      habit_id: habitObj.id,
      activation_count: 0,
      weekly_goal: 0,
      name: habitObj.name,
      img: habitObj.img,
      category: habitObj.category
    })
    .then(response => {
      this.setState({
        userHabits: [...this.state.userHabits, response.data.user_habit]
      })
    })
  }

  // Delete user habit
  deleteUserHabit = (userHabitObj) => {
    let confirmDelete = window.confirm("Delete habit?")
    if (confirmDelete) {
      axios.delete(`http://localhost:3001/user_habits/${userHabitObj.id}`, {
        params: {id: userHabitObj.id}
      })
      this.setState({
        userHabits: this.state.userHabits.filter(userHabit => userHabit.id !== userHabitObj.id)
      })
    }
  }

  // Add goals
  updateUserHabits = (userHabitObj) => {
    // // find correct userHabit in array
    let foundUserHabit = this.state.userHabits.find(userHabit => userHabit.id === userHabitObj.id)
    // update userHabit object
    let updatedUserHabit = {...foundUserHabit, ...userHabitObj}
    // update userHabits array
    let updatedUserHabits = this.state.userHabits.map(userHabit => {
      if (userHabit.id === updatedUserHabit.id) {
        return updatedUserHabit
      } else {
        return userHabit
      }
    })
    // set state
    this.setState({
      userHabits: updatedUserHabits
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Navtool
          isLoggedIn={this.state.isLoggedIn}
          logOut={this.handleLogout}
          user={this.state.user}/>

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

          <Route exact path={`/users/${this.state.user.id}`}
          render={() => <UserPage
          user={this.state.user}
          loggedInStatus={this.state.isLoggedIn}
          habits={this.state.habits}
          userHabits={this.state.userHabits}
          deleteUserHabit={this.deleteUserHabit}
          updateUserHabits={this.updateUserHabits}/>}
          />

          <Route exact path='/habits'
          render={() => <HabitsContainer
          habits={this.applyFilter()}
          addUserHabit={this.addUserHabit}
          setFilter={this.setFilter}
          filterCategory={this.filterCategory}
          filterValue={this.state.filterValue}
          userHabits={this.state.userHabits}/>}
          />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
