import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import Footer from './Footer';
import FuseTitle from './FuseTitle';
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

    // if (this.props.history.location.pathname === '/albums') {
    //   this.changeSVGBackground();
    // }
    
    // let yPos = window.innerHeight / 2 - this.fuse.offsetHeight;

    // console.log(this.fuse.getBoundingClientRect());
    

    // TweenMax.set(this.fuseTitleContainer, {
    //   y: yPos
    // });

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
      <Switch>

          <Route exact path="/" render={(props) => {
            return (
            <div>
              <img src="images/top.svg" alt="" className="yellow-bar hide-mobile"/>
              <img src="images/top-mobile.svg" alt="" className="yellow-bar hide-desktop"/>
            </div>
            )
          }} 
          />
      
      </Switch>

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
            className="albums-component"
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

        <Switch>

          <Route exact path="/" render={(props) => {
            return (
            <div>
            <img src="images/bottom.svg" alt="" className="yellow-bar hide-mobile"/>
            <img src="images/bottom-mobile.svg" alt="" className="yellow-bar hide-desktop"/>
            </div>
            )
          }} 
          />
      
      </Switch>

        

        <Footer />

        <TrackPlayer
          currentFile={this.state.currentFile}
          ref={this.trackPlayer}
        />

        
      </div>
    );
  }
}

export default withRouter(Fuse);