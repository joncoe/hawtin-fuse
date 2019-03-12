import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import {Quad} from 'gsap/src/uncompressed/easing/EasePack';

import quotes from './data/quotes';
import FuseTitle from './FuseTitle';
import ShoppingCartButton from './ShoppingCartButton';

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

    console.log('this.market ', this.market);

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
    TweenMax.delayedCall(1, cycle);

  }

  componentDidMount() {

    this.cycleQuotes();

    // if (window.innerWidth >= 768) {
      // let yPos = window.innerHeight / 2;
      
  
      // TweenMax.set(this.homepageBlock, {
      //   y: yPos
      // });

    // }
  }

  componentWillUnmount() {
    this.myTween.kill();
  }

  render() {

    return (   

      <div className="homepage-block" ref={div => this.homepageBlock = div}>
        <div className="homepage-block-container">

        
          <TransitionGroup>
            <FuseTitle/>
          </TransitionGroup>
        

          <div className="fuse-button-container">
            <ShoppingCartButton urlText="Vinyl" url={this.market.vinylUrl} />
            <ShoppingCartButton urlText="Digital" url={this.market.digitalUrl} />
          </div>

          
          <section className="fuse-quote-rotation">
            <ul className="list-unstyled">
              
              {/* render quotes */}
              {this.state.quotes.map((quote, i) => {
                return (
                  <li ref={li => this.quotesArr[i] = li} key={i}>
                    <p>
                      <q>
                        {quote.quote}
                      </q><br />
                        {quote.media} {quote.date}
                    </p>
                  </li>
                );
              })}
            
            </ul>
          </section>

        
        </div>
      </div>

    );
  }
}

export default FuseWelcome;