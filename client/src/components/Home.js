import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Questions App</h1>
        <h4>Create a new question</h4>
        <span>
          <Link to="/new">GO</Link>
        </span>
      </div>
    );
  }
}

export default Home;