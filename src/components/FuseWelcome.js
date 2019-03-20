import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import {Quad} from 'gsap/src/uncompressed/easing/EasePack';

import quotes from './data/quotes';
import FuseTitle from './FuseTitle';
import ShoppingCartButton from './ShoppingCartButton';

import ReactSlickCarousel from './ReactSlickCarousel';

import {NavLink} from 'react-router-dom';

import {
  // CSSTransition,
  // Transition,
  TransitionGroup
} from 'react-transition-group';


class FuseWelcome extends Component {

  constructor(props){
    super(props);

    this.parentElement = null;
    this.myTween = null;
    this.quotesArr = [];
    this.homepageBlock = null;

    this.market = this.props.market;

    this.state = {
      quotes: quotes
    }
  }

  cycleQuotes() {

    let index = 0;
    const totalQuotes = this.quotesArr.length;
    let currentQuote;
    const self = this;

    function cycle() {
      currentQuote = self.quotesArr[index];
      self.myTween = TweenMax.to(currentQuote, 0.75, {opacity: 1, ease: Quad.easeOut, onComplete: function _() {
        self.myTween = TweenMax.to(currentQuote, 1, {opacity: 0, ease: Quad.easeIn, delay: 3, onComplete: function _() {
          index++;
          if (index === totalQuotes) index = 0;
          cycle();
        }})
      }})
    }
    // TweenMax.delayedCall(1, cycle);

  }

  componentDidMount() {

    this.cycleQuotes();

  }

  componentWillUnmount() {
    if(this.myTween != null) {
      this.myTween.kill();
    }
  }

  render() {

    return (   

      <div className="homepage-block" ref={div => this.homepageBlock = div}>
        <div className="homepage-block-container">
        
        <header className="fuse-header"  ref={header => this.titleNode = header}>

          <div className="fuse-title">
            <NavLink to="/" activeClassName="activate" >
              <span className="fuse-title-container">
                <span className="fuse-title-fuse  fuse-title-block">
                  <img 
                    src="images/title-fuse.svg" 
                    alt="f.u.s.e."
                  />
                </span>
                <span className="fuse-title-dimensions  fuse-title-block">
                  <img src="images/title-dimensions.svg" alt="dimensions"/>
                </span>
              </span>
            </NavLink>
          </div>

          <h2 className="fuse-subtitle"><p>25th Anniversary Edition</p>Vinyl Box Set and <span className="nowrap">Digital Collection</span></h2>
        </header>
          


          <section className="fuse-quote-rotation">
            <ul className="list-unstyled">
              
              {/* render quotes */}
              {this.state.quotes.map((quote, i) => {
                return (
                  <li ref={li => this.quotesArr[i] = li} key={i}>
                    <p>
                        {quote.quote}
                    </p>
                  </li>
                );
              })}
            
            </ul>
        </section>

          

          <ReactSlickCarousel/>

        
{/*
          <div className="fuse-button-container">
            <ShoppingCartButton urlText="Vinyl" url={this.market.vinylUrl} />
            <ShoppingCartButton urlText="Digital" url={this.market.digitalUrl} />
          </div>
*/}
          


          <div className="listen-and-preview-container">
            <NavLink to="/albums" className="listen-preview-button">
            <i className="fas fa-headphones"></i>  Enter Dimensions</NavLink>
          </div>

        
        </div>
      </div>

    );
  }
}

export default FuseWelcome;