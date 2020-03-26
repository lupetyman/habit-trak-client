import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';


class Navtool extends Component {
  render() {
    return(
      <Navbar bg='primary' expand='lg' id='navbar'>
        <Link to='/' className='navbar-brand' id='brand'>H\T</Link>
        <Nav className='ml-auto' id='nav'>
          <Link to='/login' className='nav-item btn'>Login</Link>
          <Link to='/signup' className='nav-item btn'>Signup</Link>
        </Nav>
      </Navbar>
    );
  };

}

export default Navtool;
