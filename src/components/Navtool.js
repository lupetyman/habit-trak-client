import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';


class Navtool extends Component {
  render() {
    return(
      <Navbar bg='inherit' expand='lg' id='navbar'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Link to='/' className='navbar-brand' id='brand'>H\T</Link>
        <Nav className='ml-auto' id='nav'>
          <Link to='/login' className='nav-item btn'>Login</Link>
          <Link to='/signup' className='nav-item btn'>Signup</Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  };

}

export default Navtool;
