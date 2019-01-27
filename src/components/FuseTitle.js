import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';


class FuseTitle extends Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <h1><NavLink to="/albums" activeClassName="active">f.u.s.e.<br />dimensions</NavLink></h1>
        </nav>
      </header>
    );
  }
}

export default FuseTitle;