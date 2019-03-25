import React, { Component } from 'react';

import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import Footer from './Footer';

// import {TweenMax} from 'gsap';
import TrackPlayer from './TrackPlayer';
import ShoppingCartButton from './ShoppingCartButton';


import {
  Route,
  Switch,
  withRouter,
  Link
} from 'react-router-dom';
import NotFound404 from './NotFound404';



import albumData from './data/albumdata';

import {

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

    this.goBack = this.goBack.bind(this);

    this.trackPlayer = React.createRef();

  
  }



  selectAlbum(albumIndex) {

    this.setState({
      currentAlbumIndex: albumIndex,
      currentAlbum: this.state.albums[albumIndex].title,
      browsingAlbum: true
    })

    this.selectedAlbum = this.state.albums[albumIndex];
    this.props.history.push('/album/' + this.selectedAlbum.key);

  }

  goBack() {
    this.setState({
      browsingAlbum: false
    })
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
                <img src="images/top.svg" alt="" className="yellow-bar hide-mobile yellow-bar-top"/>
                <img src="images/top-mobile.svg" alt="" className="yellow-bar hide-desktop  yellow-bar-top"/>
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
              <div>
              <nav className="go-back">
                <Link to="/" onClick={this.props.goBack}><img src="/images/back.svg" alt="Go back to albums page"/></Link>
            </nav>
              <Albums {...props} 
              selectAlbumFunc={this.selectAlbum}
              market={this.state.market}
              albums={this.state.albums}/></div>)
            }}
          />

  
          <Route 
            exact
            path="/album/:albumName"
            render={(props) => {
              return (
                <div>
                  <nav className="go-back">
                    <ul className="list-unstyled">
                      <li><Link to="/albums" onClick={this.props.goBack}><img src="/images/back.svg" alt="Go back to albums page"/></Link></li>

                      {
                        this.state.albums.map((album, i) => {
                          return (

                            <li key={i}
                            className={this.state.currentAlbumIndex === i ? 'active' : ''}
                            ><a href="/album/dimension-intrusion" onClick={(e) => {
                              e.preventDefault();
                              this.selectAlbum(i);
                            }}><div className="album-tiny-link"></div></a></li>
                           
                          )
                        })
                      }
                    </ul>
                  </nav>
                
                <AlbumDetails 
                  {...props}
                  market={this.state.market}
                  selectedAlbumInfo={this.selectedAlbum}
                  loadTrack={this.loadTrack}
                  goBack={this.goBack}
                />
              </div>)
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

        <div className="fuse-button-container">
          <ShoppingCartButton urlText="Vinyl" url={this.state.market.vinylUrl} />
          <ShoppingCartButton urlText="Digital" url={this.state.market.digitalUrl} />
        </div>
        
      </div>
    );
  }
}

export default withRouter(Fuse);