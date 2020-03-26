import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Navtool from './components/Navtool';
import Login from './components/Login';
import Signup from './components/Signup';


class App extends Component {

  state = {
    isLoggedIn: false,
    user: {}
  };

  //Check if user is logged in
  componentDidMount() {
    this.loginStatus()
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
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  };

  render() {
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

        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
