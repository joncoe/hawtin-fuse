import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';


import {
  Route,
  Switch
} from 'react-router-dom';
import NotFound404 from './NotFound404';
import FuseTitle from './FuseTitle';

import albumData from './data/albumdata';

class Fuse extends Component {

  constructor(props) {
    super(props);
    this.state = albumData;
  }

  render() {

    let selectedAlbum = this.state.albums[0];

    console.log(selectedAlbum);

    return (
      <div>


        <Route exact path="/" component={FuseTitle} />
        <Route path="/albums" component={FuseTitle} />

        <Switch>

          <Route exact path="/" component={FuseWelcome} />
          <Route path="/albums" component={Albums} />


          <Route 
            exact
            path="/album/:albumName"
            render={(props) => {
              return <AlbumDetails {...props} selectedAlbumInfo={selectedAlbum}/>
            }}

          />

          <Route render={() => <NotFound404/>} />

        </Switch>


        
      </div>
    );
  }
}

export default Fuse;