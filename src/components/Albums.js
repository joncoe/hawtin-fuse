import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';
import FuseTitle from './FuseTitle';
import Footer from './Footer';

import {TweenMax} from 'gsap';
import {Expo, Quad} from 'gsap/src/uncompressed/easing/EasePack';

import {
  // CSSTransition,
  Transition,
  TransitionGroup
} from 'react-transition-group';
// import {TransitionMotion} from 'react-motion'

class Albums extends Component {

  constructor(props) {
    super(props);
    this.albums = this.props.albums;
    this.market = this.props.market;
    this.fuseTitle = null;
    this.textContainer = null;

    this.onTextEnter = this.onTextEnter.bind(this);
    this.onTextEntered = this.onTextEntered.bind(this);


  }

  selectAlbum(i) {
    this.props.selectAlbumFunc(i);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }



  onTextEnter() {
    console.log('on text enter');
    
    TweenMax.set(this.textContainer, {
      // autoAlpha: 0,
      y: '100%'
    });

    TweenMax.set(this.textContainer, {
      // autoAlpha: 0,
      y: '100%'
    });
  }

  onTextEntered() {
    console.log('on text entered');
    TweenMax.to(this.textContainer, 3, {
      // autoAlpha: 0,
      y: '0%',
      ease: Expo.easeOut
    });
  }



  // onEnter={() => { console.log(key + ' enter') }}
  // onEntering={() => { console.log(key + ' entering') }}
  // onEntered={() => { console.log(key + ' entered') }}
  // onExit={() => { console.log(key + ' exit') }}
  // onExiting={() => { console.log(key + ' exiting') }}
  // onExited={() => { console.log(key + ' exited') }}


  render() {

    return (
      <div className="albums-container">
      
        <FuseTitle/>
      



        <ul className="album-navigation list-unstyled">
        {
          this.albums.map((album, i) => {
            return (
              <li onClick={() => this.selectAlbum(i)} key={i} >
                <img src={`/images/${album.cover}`} alt={album.title} />
              </li>
            )
          })
        }
        </ul>

        <div className="fuse-button-container">
          <ShoppingCartButton urlText="Vinyl" url={this.market.vinylUrl} />
          <ShoppingCartButton urlText="Digital" url={this.market.digitalUrl} />
        </div>

        
          <div id="album-text-clipper">
            <main 
              className="album-text-container"
              ref={main => this.textContainer = main}
              >
              <img src="/images/yellow-bar-white.svg" alt="" className="yellow-bar"/>
                <div className="album-text-box">
                  <section className="fuse-text">

                  <p>‘Dimensions’ is a limited edition vinyl box set celebrating the 25 years anniversary of Richie Hawtin’s original F.U.S.E. releases.</p>

<p>The box set features re-releases of the classic albums ‘Dimension Intrusion’ and ‘Train-Tracs’, both including previously unreleased tracks. In addition it premiers the unreleased album ‘Computer Space’, completing the extended range of Hawtin’s recording persona in the formative year of 1993. All albums are re-mastered and pressed on white vinyl. Digital download codes are included. </p>

<p>The three album covers are based upon original artworks by visual artist Matthew Hawtin, Richie’s brother, and are included in the box set in form of exclusive artist grade prints.</p>

<p>The booklet features a newly written essay by Matthew Hawtin alongside unpublished images and words by Richie Hawtin.</p>

<p>The box set itself was custom designed for the anniversary release by Matthew. Its design is based upon the original artwork that inspired the early albums and emphasizes the reciprocal inspiration between the brother’s creative work. </p>

<ul className="list-unstyled text-center album-features">
  <li>1 custom made vinyl box set</li>
  <li>8 Vinyl</li>
  <li>digital download codes</li>
  <li>3 prints</li>
  <li>1 booklet</li>
  <li>Limited Edition of 500</li>
</ul>

                  </section>

                </div>
              </main>
            </div>


      </div>
    );
  }
}

export default Albums;