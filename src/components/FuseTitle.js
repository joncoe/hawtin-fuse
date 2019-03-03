import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import {TweenMax} from 'gsap';
import {Expo} from 'gsap/src/uncompressed/easing/EasePack';

import Transition from "react-transition-group/Transition";


class FuseTitle extends Component {

  constructor(props) {
    super(props);
    this.titleNode = null;
    this.dimensionsNode = null;
  } 

  onEnter = () => {
    // console.log("onEnter fuse Title");
    TweenMax.set(this.titleNode, {
      autoAlpha: 0,
      y: '-100%'
    });
  };
  onEntering = () => {
    // console.log("onEntering fuse Title");
  };
  onEntered = () => {
    // console.log("onEntered fuse Title");
    TweenMax.to(this.titleNode, 2, {
      autoAlpha: 1,
      y: '0%',
      ease: Expo.easeOut
    });
  };
  onExit = () => {
    // console.log("onExit fuse Title");
  };
  onExiting = () => {
    // console.log("onExiting fuse Title");
  };
  onExited = () => {
    // console.log("onExited fuse Title");
  };

  endHandler = (n, done) => {
    // console.log("endHandler box");

    // if (this.props.in) {
    //   console.log("endHandler box coming in");

    //   setTimeout(() => {
    //     TweenLite.to(n, 1, {
    //       autoAlpha: 1,
    //       x: 0,
    //       scale: 0.7,
    //       ease: Back.easeOut,
    //       onComplete: done,
    //     });
    //   }, duration);
    // } else {
    //   console.log("endHandler box leaving");
    //   TweenLite.to(n, 1, {
    //     autoAlpha: 0,
    //     x: -500,
    //     onComplete: done,
    //   });
    // }
  };

  render() {
    const { ...props } = this.props;
    return (
      <Transition
        {...props}
        appear={true}
        timeout={0}
        mountOnEnter
        unmountOnExit
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
        addEndListener={this.endHandler}
      >
        <header className="fuse-header"  ref={header => this.titleNode = header}>
          <nav>

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


          </nav>

          <h2 className="fuse-subtitle">Vinyl Box Set and <span className="nowrap">Digital Collection</span></h2>
        </header>
      </Transition>
    );
  }
}

export default FuseTitle;