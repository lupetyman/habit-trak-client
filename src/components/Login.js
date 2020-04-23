import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

class Login extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    errors: ''
  };

  //Get user input
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  //Send user data to backend
  handleSubmit = (event) => {
    event.preventDefault();
    const {username, email, password} = this.state;
    let user = {
      username: username,
      email: email,
      password: password
    }

    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response)
          console.log("Login", response)
          // this.redirect()
          this.props.history.push(`/users/${response.data.user.id}`)
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('API error:', error))
  };

  // redirect = () => {
  //   //TODO direct user to profile page
  //   window.location.replace(`/users/${response.data.user.id}`)
  // };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };

  render() {
    const {username, email, password} = this.state;

    return (
      <div id='form'>
        <div className='container' id='form-container'>
          <h3 style={{textAlign: 'center'}}>Log In</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='formUsername'>
              <Form.Label className='label'>Username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label className='label'>Email Address</Form.Label>
              <Form.Control
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label className='label'>Password</Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <div>

              <Button placeholder="submit" type="submit">Log In</Button>{' '}{' '}
              <strong>or</strong>{' '}{' '}


              <Link to='/signup' className='btn btn-info'>Sign Up</Link>
            </div>


          </Form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Login);
