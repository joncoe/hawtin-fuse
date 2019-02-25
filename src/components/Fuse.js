import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
// import {TweenMax} from 'gsap';
import TrackPlayer from './TrackPlayer';

import {
  NavLink
} from 'react-router-dom';


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

    this.fuse = null;
    this.dimensions = null;

    this.selectAlbum = this.selectAlbum.bind(this);

    this.selectedAlbum = this.state.albums[0];

    this.loadTrack = this.loadTrack.bind(this);

    this.trackPlayer = React.createRef();

  
  }

  componentDidMount() {


    this.props.history.listen((location, action) => {
      if(location.pathname === '/albums') {
        this.changeSVGBackground();
      }      
    })

    if (this.props.history.location.pathname === '/albums') {
      this.changeSVGBackground();
    }
    
    let yPos = window.innerHeight / 2 - this.fuse.offsetHeight;

    console.log(this.fuse.getBoundingClientRect());
    

    TweenMax.set(this.fuseTitleContainer, {
      y: yPos
    });

    // TweenMax.set(this.dimensions, {
    //   y: yPos
    // });
  }

  changeSVGBackground() {
    console.log('change svg background');

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
      <g fill="none" fillRule="evenodd"><path fill="#FD0" d="M-394.386 772.014L-1676 1141.284v157.322l1281.614-508.109v-.001L389.748 931.52l2309.527 367.086v-157.322l-1028.268-63.779L389.748 886.166-394.386 772z"/><path fill="#FFCB05" d="M-251.693 147.8L446.524 8.335 854.489-61-253.137 65.11z"/></g>
      </svg>

      <div className="fuse-title">
          <NavLink to="/albums" activeClassName="activate" >
            <span className="fuse-title-container"
              ref={span => this.fuseTitleContainer = span} 
            >
              <span className="fuse-title-fuse"
                ref={span => this.fuse = span} 
              >
                <img 
                  src="images/title-fuse.svg" 
                  alt="f.u.s.e."
                />
              </span>
              <span className="fuse-title-dimensions"
                ref={span => this.dimensions = span} 
              ><img src="images/title-dimensions.svg" alt="dimensions"/></span>
            </span>
          </NavLink>
      </div>

        
    {/*
        <Route exact path="/" component={FuseTitle} />
        <Route path="/albums" component={FuseTitle} />
    */}
        <Switch>

          <Route exact path="/" 
          
          render={(props) => {
            return (
            <FuseWelcome {...props} 
            selectAlbumFunc={this.selectAlbum}
            market={this.state.market}
            albums={this.state.albums}/>)
          }}
          />
          
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