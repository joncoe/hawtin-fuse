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

        <TransitionGroup>

          <Transition
            // {...props}
            appear={true}
            timeout={10}
            mountOnEnter
            unmountOnExit
            onEntered={this.onTextEntered}
            // onEntering={this.onEntering}
            onEnter={this.onTextEnter}
            // onExit={this.onExit}
            // onExiting={this.onExiting}
            // onExited={this.onExited}
            // addEndListener={this.endHandler}
          >
          <div id="album-text-clipper">
            <main 
              className="album-text-container"
              ref={main => this.textContainer = main}
              >
              <img src="/images/yellow-bar-white.svg" alt="" className="yellow-bar"/>
                <div className="album-text-box">
                  <section className="fuse-text">
                  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consectetur nunc, ut gravida sem. Fusce dictum nulla at urna hendrerit semper. Vivamus sit amet pretium orci, vestibulum ornare libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum elit velit, posuere feugiat urna ac, lacinia tincidunt est. Mauris velit nulla, feugiat sed massa at, lobortis posuere magna. Donec porta, magna non varius bibendum, lacus massa viverra erat, consequat efficitur ante tortor nec augue.</p>

                    <p>Fusce luctus finibus urna, ut pharetra sapien efficitur eu. Cras pharetra eget lacus a scelerisque. Sed lacinia pulvinar elit et viverra. Vivamus pharetra semper sapien, a rhoncus lorem auctor in. Vestibulum eleifend lacinia leo, non molestie dui. Praesent vitae odio facilisis, scelerisque urna eu, venenatis nulla. Donec bibendum eget ipsum eget lobortis. Donec non eros feugiat, blandit risus et, molestie mi. Nunc ut leo quis sem molestie fermentum. Mauris sed porttitor urna. Vestibulum placerat gravida ornare. Proin posuere dapibus metus. Aliquam elementum mattis blandit. Cras at purus sit amet metus rhoncus feugiat. Integer metus velit, lacinia id porta sit amet, porta venenatis mauris. Sed maximus urna non mauris elementum, nec laoreet metus faucibus.</p>
                  </section>

                </div>
              </main>
            </div>
          </Transition>

          
        
        </TransitionGroup>

      </div>
    );
  }
}

export default Albums;