import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Private extends Component {
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Private</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Private);