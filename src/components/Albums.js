import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';
import FuseTitle from './FuseTitle';

// import {TweenMax} from 'gsap';
// import {Expo, Quad} from 'gsap/src/uncompressed/easing/EasePack';

import {
  // CSSTransition,
  // Transition,
  TransitionGroup
} from 'react-transition-group';
// import {TransitionMotion} from 'react-motion'

class Albums extends Component {

  constructor(props) {
    super(props);
    this.albums = this.props.albums;
    this.market = this.props.market;
    this.fuseTitle = null;


  }

  selectAlbum(i) {
    this.props.selectAlbumFunc(i);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fuseTitleEnter() {
    console.log('animate me')
    // TweenMax.set(this.fuseTitle, {
    //   x: "100%",
    //   opacity: 0
    // });
    // TweenMax.to(this.fuseTitle, .5, {
    //   x: "0%",
    //   opacity: 1
    // });
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
      <TransitionGroup>
        <FuseTitle/>
      </TransitionGroup>



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

        <main className="album-text-container">
          <section className="fuse-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consectetur nunc, ut gravida sem. Fusce dictum nulla at urna hendrerit semper. Vivamus sit amet pretium orci, vestibulum ornare libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum elit velit, posuere feugiat urna ac, lacinia tincidunt est. Mauris velit nulla, feugiat sed massa at, lobortis posuere magna. Donec porta, magna non varius bibendum, lacus massa viverra erat, consequat efficitur ante tortor nec augue.</p>

            <p>Fusce luctus finibus urna, ut pharetra sapien efficitur eu. Cras pharetra eget lacus a scelerisque. Sed lacinia pulvinar elit et viverra. Vivamus pharetra semper sapien, a rhoncus lorem auctor in. Vestibulum eleifend lacinia leo, non molestie dui. Praesent vitae odio facilisis, scelerisque urna eu, venenatis nulla. Donec bibendum eget ipsum eget lobortis. Donec non eros feugiat, blandit risus et, molestie mi. Nunc ut leo quis sem molestie fermentum. Mauris sed porttitor urna. Vestibulum placerat gravida ornare. Proin posuere dapibus metus. Aliquam elementum mattis blandit. Cras at purus sit amet metus rhoncus feugiat. Integer metus velit, lacinia id porta sit amet, porta venenatis mauris. Sed maximus urna non mauris elementum, nec laoreet metus faucibus.</p>
          </section>


        </main>
      </div>
    );
  }
}

export default Albums;