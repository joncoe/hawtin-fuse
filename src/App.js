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

    // let requestedPath = this.props.location.pathname;
    // console.log('requested path is ', requestedPath);

    return (
      <div className="App">

        <Route path="/" component={Fuse}/>
  

      </div>
    );
  }
}

export default App;
