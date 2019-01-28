import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import {Quad} from 'gsap/src/uncompressed/easing/EasePack';

import quotes from './data/quotes';

import {
  Link
} from 'react-router-dom';

class FuseWelcome extends Component {

  constructor(props){
    super(props);

    this.parentElement = null;
    this.myTween = null;
    this.quotesArr = [];

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
  }

  componentWillUnmount() {
    this.myTween.kill();
  }

  render() {

    return (   
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
    );
  }
}

export default FuseWelcome;