import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navtool extends Component {
  render() {
    return(
      <nav class='navbar navbar-expand-lg navbar-light bg-primary'>
        <Link to='/' class='navbar-brand'>Habit\Trak</Link>
        <div class='nav nav-pills ml-auto'>
          <Link to='/login' class='nav-item nav-link btn btn-primary'>Login</Link>
          <Link to='/signup' class='nav-item nav-link btn btn-primary'>Signup</Link>
        </div>
      </nav>
    );
  };

}

export default Navtool;
