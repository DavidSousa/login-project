import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = () => {
    axios.post('/api/login', { email: this.state.email, password: this.state.password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log(response);
        this.props.history.push('/private');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <input name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}/>
        </div>
        <div>
          <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleInputChange}/>
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Home;