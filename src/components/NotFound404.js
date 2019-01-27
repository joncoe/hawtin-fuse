import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound404 extends Component {
  render() {
    return (
      <div>
        <h1>Another dimension</h1>
        <Link to="/">Return to a safe dimension</Link>
      </div>
    );
  }
}

export default NotFound404;