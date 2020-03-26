import React from 'react';

import { Jumbotron } from 'react-bootstrap';

const Home = () => {
  return (
    <div id='home'>
      <div className="container" id='home-container'>

        <Jumbotron className='container' id='jumbo-container'>
          {/* jumbotron: */}
          <h2>Welcome to HabitTrak!</h2>
          <p>Our goal is to help you achieve <em>your</em> goals, whatever they may be.<br /> And in order to get where you're going, you need to know what you've done!</p>
        </Jumbotron>

        <div className='container' id='intro-cards'>
          {/* 3 columns of cards in a row: */}
          <p>Step 1: Select some habits to track from our list.</p>
          <p>Step 2: Log in to your profile and set a goal for your habit.</p>
          <p>Step 3: Track! Activate your habit each time you complete it!</p>
        </div>

        <div>
          <h4>Footer</h4>
        </div>

      </div>
    </div>
  );
};

export default Home;
