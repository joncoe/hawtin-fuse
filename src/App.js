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

        <Route path="/" component={Fuse}/>
  
      </div>
    );
  }
}

export default App;
