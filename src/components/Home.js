import React from 'react';

import { Jumbotron, Card, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div id='home'>
      <div className="container" id='home-container'>

        <Jumbotron className='container' id='jumbo-container'>
          <h2>Welcome to HabitTrak!</h2>
          <p>Our goal is to help you achieve <em>your</em> goals, whatever they may be.<br /> And in order to get where you're going,<br /> you need to know what you've done!</p>
        </Jumbotron>

        <Container id='intro-cards'>
          <Row id='card-row'>
            <Card className='home-card' bg='secondary' text='white'>
              <Card.Header>Step 1</Card.Header>
              <Card.Body>
                <Card.Text>
                  Select any number of habits to track from our list
                </Card.Text>
                  <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1577701122197-c9607038bd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
              </Card.Body>
            </Card>

            <Card className='home-card' bg='secondary' text='white'>
              <Card.Header>Step 2</Card.Header>
              <Card.Body>
                <Card.Text>
                  Log in to your profile and set a goal for your habit
                </Card.Text>
                <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1577701122197-c9607038bd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
              </Card.Body>
            </Card>

            <Card className='home-card' bg='secondary' text='white'>
              <Card.Header>Step 3</Card.Header>
              <Card.Body>
                <Card.Text>
                  Activate your habit each time you complete it!
                </Card.Text>
                <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1577701122197-c9607038bd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
