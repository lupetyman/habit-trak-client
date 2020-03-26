import React from 'react';
import { Link } from 'react-router-dom';

import Navtool from './Navtool';

const Home = () => {
  return (
    <div>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>
      {/* - navbar
          - jumbotron
          - footer
          */}
    </div>
  );
};

export default Home;
