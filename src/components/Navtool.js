import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';


class Navtool extends Component {

  render() {
    //Conditionally render buttons based on isLoggedIn status
    let stateButton1;
    let stateButton2;

    if (!this.props.isLoggedIn) {
      stateButton1 = <Link to='/login' className='nav-item btn'>Login</Link>
      stateButton2 = <Link to='/signup' className='nav-item btn'>Signup</Link>
    } else {
      stateButton1 = <Link to='/habits' className='nav-item btn'>Profile</Link>
      stateButton2 = <Link to='/' className='nav-item btn' onClick={this.props.logOut}>Sign Out</Link>
    }

    return(
      <Navbar bg='inherit' expand='lg' id='navbar'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Link to='/' className='navbar-brand' id='brand'>H\T</Link>
        <Nav className='ml-auto' id='nav'>
          {stateButton1}
          {stateButton2}
          {/* <Link to='/login' className='nav-item btn'>Login</Link>
          <Link to='/signup' className='nav-item btn'>Signup</Link> */}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  };

}

export default Navtool;
