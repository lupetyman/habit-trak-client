import React, { Component } from 'react';
import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('API error:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  };

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
    const {username, email, password, password_confirmation} = this.state;

    return (
      <div id='form'>
        <div className='container' id='form-container'>
          <h3>Sign Up</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formPasswordConfirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                placeholder="password confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button placeholder="submit" type="submit">Sign Up</Button>
          </Form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>

      </div>
    );
  };
}

export default Signup;
