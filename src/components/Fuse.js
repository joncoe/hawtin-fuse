import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';


import {
  Route,
  Switch
} from 'react-router-dom';
import NotFound404 from './NotFound404';

class Fuse extends Component {
  render() {
    return (
      <div>


        <Switch>

          <Route exact path="/" component={FuseWelcome} />
          <Route path="/albums" component={Albums} />


          <Route 
            exact
            path="/album/:albumName"
            render={(params) => {
              return <AlbumDetails {...params} />
            }}

          />

          <Route render={() => <NotFound404/>} />

        </Switch>


        
      </div>
    );
  }
}

export default Fuse;