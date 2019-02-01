import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';


import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import NotFound404 from './NotFound404';
import FuseTitle from './FuseTitle';

import albumData from './data/albumdata';

class Fuse extends Component {

  constructor(props) {
    super(props);
    this.state = albumData;

    this.selectAlbum = this.selectAlbum.bind(this);

    this.selectedAlbum = this.state.albums[0];
    
  }

  selectAlbum(albumIndex) {
    console.log(albumIndex);
    // let selectedAlbum = this.state.albums[0];
    this.setState({
      currentAlbumIndex: albumIndex
    })

    this.selectedAlbum = this.state.albums[albumIndex];
   
    console.log(this.selectedAlbum);

    this.props.history.push('/album/' + this.selectedAlbum.key);

    // console.log(this);
  }

  render() {


    // console.log(selectedAlbum);

    return (
      <div>


        <Route exact path="/" component={FuseTitle} />
        <Route path="/albums" component={FuseTitle} />

        <Switch>

          <Route exact path="/" component={FuseWelcome} />
          <Route 
          path="/albums" 
            render={(props) => {
              return <Albums {...props} selectAlbumFunc={this.selectAlbum} />
            }}
          />


          <Route 
            exact
            path="/album/:albumName"
            render={(props) => {
              return <AlbumDetails {...props} selectedAlbumInfo={this.selectedAlbum}/>
            }}

          />

          <Route render={() => <NotFound404/>} />

        </Switch>


        
      </div>
    );
  }
}

export default withRouter(Fuse);