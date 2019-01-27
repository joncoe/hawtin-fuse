import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';


import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Fuse extends Component {
  render() {
    return (
      <div>


        <Switch>

          <Route path="/" component={FuseWelcome} />
          <Route path="/albums" component={Albums} />


          <Route 
            path="/album/:albumName"
            render={(params) => {
              return <AlbumDetails {...params} />
            }}

          />

        </Switch>


        
      </div>
    );
  }
}

export default Fuse;