import React, { Component } from 'react';
import Fuse from './components/Fuse';

import {
  // BrowserRouter as Router,
  // Redirect,
  Route,
  // Link,
  // Switch
} from 'react-router-dom';

import './App.scss';


class App extends Component {
  render() {


    return (
      <div className="App">

        <svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="svg-bg" preserveAspectRatio="none">
          <g fill="none" fillRule="evenodd">
            <path fill="#FD0" d="M-394.386 772.014L-1676 1141.284v157.322l1281.614-508.109v-.001L389.748 931.52l2309.527 367.086v-157.322l-1028.268-63.779L389.748 886.166-394.386 772z" />
            <path fill="#FFCB05" d="M-279 185.035L720.567 29.483l581.731-67.885L-265.288 28.31z" />
          </g>
        </svg>

        <Fuse/>
  
      </div>
    );
  }
}

export default App;
