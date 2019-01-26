import React, { Component } from 'react';

import Albums from './Albums';
import AlbumDetails from './AlbumDetails';


import {
  // BrowserRouter as Router,
  // Redirect,
  Route,
  Link,
  // Switch
} from 'react-router-dom';

class Fuse extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          
          <nav>
            <h1><Link to="/albums">f.u.s.e. dimensions</Link></h1>
          </nav>
        </header>

        <Route path="/albums" component={Albums} />


        <Route 
          path="/album/:albumName"
        
          render={(params) => {

            return <AlbumDetails {...params} />

          }}


        />


        
      </div>
    );
  }
}

export default Fuse;