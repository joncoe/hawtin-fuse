import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';


class FuseTitle extends Component {

  render() {
    return (
      <header className="fuse-header">
        <nav>
          <h1><NavLink to="/albums" activeClassName="activate">f.u.s.e.<br />dimensions</NavLink></h1>
        </nav>

        <h2 class="fuse-subtitle">Vinyl Box Set and Digital Collection</h2>
      </header>
    );
  }
}

export default FuseTitle;