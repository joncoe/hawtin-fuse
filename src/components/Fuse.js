import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
// import {TweenMax} from 'gsap';
import TrackPlayer from './TrackPlayer';


import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import NotFound404 from './NotFound404';

import {TweenMax} from 'gsap';

import albumData from './data/albumdata';

import {
  // CSSTransition,
  // Transition,
  TransitionGroup
} from 'react-transition-group';

class Fuse extends Component {

  constructor(props) {
    super(props);
    this.state = albumData;

    this.selectAlbum = this.selectAlbum.bind(this);

    this.selectedAlbum = this.state.albums[0];

    this.loadTrack = this.loadTrack.bind(this);

    this.trackPlayer = React.createRef();

  
  }

  componentDidMount() {

    // const titleNode = this.titleRef;
    // const vh = window.innerHeight;
    // const half = vh / 2;

    // console.log(titleNode);
    // TweenMax.set(titleNode, {y: 200})
    // console.log(this.titleNode);
    // TweenMax.to(this.titleNode, 1, {y:200});

    this.props.history.listen((location, action) => {
      if(location.pathname === '/albums') {
        this.changeSVGBackground();
      }      
    })

    if (this.props.history.location.pathname === '/albums') {
      this.changeSVGBackground();
    }
    
  }

  changeSVGBackground() {
    console.log('change svg background');
    TweenMax.to(this.path1, 2, {
      attr:{
        d:"M0 1273.284v157.322l1281.614-508.109L1483.5 1145.5l2891.775 285.106v-157.322L3344 1248l-1804.5-190-257.886-154z"
       }

    })

    TweenMax.to(this.path2, 2, {
      attr:{
        d:"M0 1273.284v157.322l1281.614-508.109L1483.5 1145.5l2891.775 285.106v-157.322L3344 1248l-1804.5-190-257.886-154z"
       }

    })
  }

  selectAlbum(albumIndex) {

    this.setState({
      currentAlbumIndex: albumIndex
    })

    this.selectedAlbum = this.state.albums[albumIndex];
    this.props.history.push('/album/' + this.selectedAlbum.key);

  }

  loadTrack(i){
    
    const trackTitle = this.state.albums[this.state.currentAlbumIndex].trackList[i].title;
    const directory = this.state.albums[this.state.currentAlbumIndex].key;
    this.trackPlayer.current.loadTrack(this.selectedAlbum, trackTitle, directory, i);
  }

  render() {
    return (
      <div>

      <svg width="100%" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="svg-bg" preserveAspectRatio="none">
        <g fill="none" fillRule="evenodd">
          <path 
          ref={div => this.path1 = div} 
          fill="#FD0" d="M-394.386 772.014L-1676 1141.284v157.322l1281.614-508.109v-.001L389.748 931.52l2309.527 367.086v-157.322l-1028.268-63.779L389.748 886.166-394.386 772z" />
          <path 
          ref={div => this.path2 = div} 
          fill="#FFCB05" d="M-279 185.035L720.567 29.483l581.731-67.885L-265.288 28.31z" />
        </g>
      </svg>

        
    {/*
        <Route exact path="/" component={FuseTitle} />
        <Route path="/albums" component={FuseTitle} />
    */}
        <Switch>

          <Route exact path="/" component={FuseWelcome} />
          
          <Route 
            path="/albums" 
            render={(props) => {
              return (
              <TransitionGroup><Albums {...props} 
              selectAlbumFunc={this.selectAlbum}
              market={this.state.market}
              albums={this.state.albums}/></TransitionGroup>)
            }}
          />

  
          <Route 
            exact
            path="/album/:albumName"
            render={(props) => {
              return <AlbumDetails 
              {...props}
              market={this.state.market}
              selectedAlbumInfo={this.selectedAlbum}
              loadTrack={this.loadTrack}

              
              />
            }}

          />

          <Route render={() => <NotFound404/>} />
        

        </Switch>

        <TrackPlayer
          currentFile={this.state.currentFile}
          ref={this.trackPlayer}
        />
        
      </div>
    );
  }
}

export default withRouter(Fuse);