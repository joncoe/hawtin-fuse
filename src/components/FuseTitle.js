import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

// import {TweenMax} from 'gsap';
// import {Expo, Quad} from 'gsap/src/uncompressed/easing/EasePack';

import {
  // CSSTransition,
  Transition
} from 'react-transition-group';


class FuseTitle extends Component {

  constructor(props) {
    super(props);
    this.titleNode = null;
    this.dimensionsNode = null;
  }

  onEnter = () => {
    console.log("onEnter fuse Title");
  };
  onEntering = () => {
    console.log("onEntering fuse Title");
  };
  onEntered = () => {
    console.log("onEntered fuse Title");
  };
  onExit = () => {
    console.log("onExit fuse Title");
  };
  onExiting = () => {
    console.log("onExiting fuse Title");
  };
  onExited = () => {
    console.log("onExited fuse Title");
  };

  endHandler = (n, done) => {
    console.log("endHandler box");

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
            <h1><NavLink to="/albums" activeClassName="activate" >f.u.s.e.<br />
            <span ref={span => this.dimensionsNode = span}>dimensions</span></NavLink></h1>
          </nav>

          <h2 className="fuse-subtitle">Vinyl Box Set and <span className="nowrap">Digital Collection</span></h2>
        </header>
      </Transition>
    );
  }
}

export default FuseTitle;