import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import {TweenMax} from 'gsap';
import {Expo, Quad} from 'gsap/src/uncompressed/easing/EasePack';


class FuseTitle extends Component {

  constructor(props) {
    super(props);
    this.titleNode = null;
    this.dimensionsNode = null;
  }

  componentDidMount() {
    // TweenMax.set(this.titleNode, {y:200});
    // TweenMax.to(this.titleNode, 2, {y:200});
  }

  // goDeep() {
  //   TweenMax.to(this.titleNode, 3, {y:0, ease: Expo.easeOut});
  //   // TweenMax.to(this.dimensionsNode, 1, {autoAlpha: 0, ease: Quad.easeOut})
  // }


  render() {
    return (
      <header className="fuse-header"  ref={header => this.titleNode = header}>
        <nav>
          <h1><NavLink to="/albums" activeClassName="activate" >f.u.s.e.<br />
          <span ref={span => this.dimensionsNode = span}>dimensions</span></NavLink></h1>
        </nav>

        <h2 className="fuse-subtitle">Vinyl Box Set and Digital Collection</h2>
      </header>
    );
  }
}

export default FuseTitle;