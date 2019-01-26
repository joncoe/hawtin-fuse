import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.scss';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';

class App extends Component {
  render() {

    // let requestedPath = this.props.location.pathname;
    // console.log('requested path is ', requestedPath);

    return (
      <div className="App">
        <header className="App-header">
          <h1>FUSE.</h1>
          <nav>
            <Link to="/albums">Albums</Link>
          </nav>
        </header>


        <Route path="/albums" component={Albums}/>

        <Route path="/album/" component={AlbumDetails}/>


      </div>
    );
  }
}

export default App;
