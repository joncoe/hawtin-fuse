import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Albums extends Component {
  render() {

    console.log(this.props.location.pathname);

    return (
      <div>
        ALBUMS PAGE

        <ul>
          <li><Link to="/album/dimensions">Dimensions</Link></li>
          <li><Link to="/album/train-tracs">Train Tracs</Link></li>
          <li><Link to="/album/computer-bran">Computer Brain</Link></li>
        </ul>
      </div>
    );
  }
}

export default Albums;