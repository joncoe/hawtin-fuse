import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import {TweenMax} from 'gsap';


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

  componentDidMount() {

    // const titleNode = this.titleRef;
    // const vh = window.innerHeight;
    // const half = vh / 2;

    // console.log(titleNode);
    // TweenMax.set(titleNode, {y: 200})
    // console.log(this.titleNode);
    // TweenMax.to(this.titleNode, 1, {y:200});
  }

  selectAlbum(albumIndex) {

    this.setState({
      currentAlbumIndex: albumIndex
    })

    this.selectedAlbum = this.state.albums[albumIndex];
    this.props.history.push('/album/' + this.selectedAlbum.key);

  }

  render() {
    return (
      <div>

        
    {/*
        <Route exact path="/" component={FuseTitle} />
        <Route path="/albums" component={FuseTitle} />
    */}
        <Switch>

          <Route exact path="/" component={FuseWelcome} />
          <Route 
          path="/albums" 
            render={(props) => {
              return <Albums {...props} 
              selectAlbumFunc={this.selectAlbum}
              market={this.state.market}
              albums={this.state.albums}/>
            }}
          />

  
          <Route 
            exact
            path="/album/:albumName"
            render={(props) => {
              return <AlbumDetails 
              {...props}
              market={this.state.market}
              selectedAlbumInfo={this.selectedAlbum}/>
            }}

          />

          <Route render={() => <NotFound404/>} />

        </Switch>


        
      </div>
    );
  }
}

export default withRouter(Fuse);