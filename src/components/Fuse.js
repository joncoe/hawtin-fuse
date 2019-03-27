import React, { Component } from 'react';
import axios from 'axios';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {TweenMax} from 'gsap';





import FuseWelcome from './FuseWelcome';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import Footer from './Footer';


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

    this.openForm = this.openForm.bind(this);

    this.closeForm = this.closeForm.bind(this);

    this.trackPlayer = React.createRef();
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  
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

  openForm(e) {
    e.preventDefault();
    this.setState({
      emailAddress: '',
      formStatus: 'static',
      formOpen: true
    })
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({
      formStatus: 'static',
      formOpen: false
    })
  }

  handleChange(e) {
    e.preventDefault();
    
    this.setState({
      emailAddress: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.emailAddress;
    
    this.setState({
      formStatus: 'submitting'
    });

    axios.post(`http://fuse.plus8.com/cgi-bin/email_action.php`, { email })
      .then(res => {
        this.setState({
          formStatus: 'received'
        });
        console.log(res);
        TweenMax.from(this.statusReceived, .4, {opacity:0});
      })
    
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
          {/*
          <ShoppingCartButton urlText="Digital" url={this.state.market.digitalUrl} />
          */}


          <a href="/digital/" className="icon-button" onClick={this.openForm}>
            <span className="icon-button-container">
              <FontAwesomeIcon icon="cart-arrow-down" size="lg"/>
              <span className="icon-button-text">Digital</span>
            </span>
          </a>


        </div>


        <div className={
          this.state.formOpen ? 'image-modal modal-open register-modal' : 'image-modal register-modal'
        }>
          
          <div className="button-close">
            <img src="/images/close.svg" alt="close"  onClick={this.closeForm}/>
          </div>
        
          <div className={
            this.state.formStatus === 'static' ? 'form-container' : 'form-container hide-container'
          }>        
            <p>Submit your email address for a notification for when the <strong>DIGITAL</strong> pre-order is available.</p>
            
            <div className="form-row">
              <input type="text" id="email" name="email" placeholder="Email Address" onChange={this.handleChange}/>
              <input type="submit" name="submit" value="Notify me" onClick={this.handleSubmit}/>
            </div>

            <p className="text-center return-text"><a href="/" onClick={this.closeForm}>Return to dimensions</a></p>
          </div>



          <div className={
              this.state.formStatus === 'submitting' ? 'form-container' : 'form-container hide-container'
            }
          >
            <div className="form-submitting  text-center">
              Your email is in space
            </div>
          
          </div>



          <div className={
              this.state.formStatus === 'received' ? 'form-container received' : 'form-container hide-container'
            }
            ref={div => this.statusReceived = div}
          >
            <div className="text-center">
              <p>Your email address is now in the computer brain. You will be notified when the <strong>DIGITAL</strong> collection is available to order.</p>

              <p className="text-center"><a href="/" onClick={this.closeForm}>Return to our dimension</a></p>
            </div>
          </div>

        </div>
      
        
      </div>
    );
  }
}

export default withRouter(Fuse);