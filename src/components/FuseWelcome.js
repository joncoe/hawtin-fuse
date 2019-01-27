import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import {Quad} from 'gsap/src/uncompressed/easing/EasePack';

import {
  Link
} from 'react-router-dom';

class FuseWelcome extends Component {

  constructor(props){
    super(props);

    // this.state = 

    this.parentElement = null;

    this.myTween = null;
    this.quotesArr = [];

    this.state = {
      quotes: [
        {
          quote: 'Twenty two year old Richie Hawtin releases his first full solo album and it\'s a corker. Including the seminal \'F.U.\' and \'Substance Abuse\' this is techno, trance, acid and ambience of the highest quality.',
          media: '- Jockey Slut,',
          date: 'July/August 1993'
        },
        {
          quote: '…’Dimension Intrusion’ is an essential purchase for space-freaks and anyone who enjoys a good hour or two of empirical sonic art.',
          media: '- Melody Maker,',
          date: 'June 1993'
        },
        {
          quote: 'The Train Abuse mix is a floor friendly Armani style repetitive drum pattern, hi-hats and bass. Simple and effective.',
          media: '- Mark and Josh, Mixmag Update,',
          date: 'June 1993'
        },
        {
          quote: 'Reviewing this album track is not applicable as this is a journey of extremely futuristic and experimental music that as a whole is another very well written chapter in the great book of techno.',
          media: '- Mark and Josh, Mixmag Update,',
          date: 'May 1993'
        },
        {
          quote: '…there’s still a defiant, solitary, almost punky attitude at work here: strange haunting, compulsive. If you don’t like it, it’s your loss.',
          media: '- Rupert Howe, Select,',
          date: 'July 1993'
        },
        {
          quote: 'Hawtin’s name has been synonymous with techno’s outer rings and inner expansion through the 90’s. This is why.',
          media: '- Kris Needs, NM',
          date: ''
        }
      ]
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
    cycle();

  }

  componentDidMount() {
    this.cycleQuotes();
  }

  componentWillUnmount() {
    this.myTween.kill();
  }

  render() {

    return (
      <div ref={div => this.parentElement = div}>
        <header className="App-header">
          <nav>
            <h1><NavLink to="/albums" activeClass="active">f.u.s.e.<br/>dimensions</NavLink></h1>
          </nav>
        </header>

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

        <nav>
            
        </nav>

      </div>
    );
  }
}

export default FuseWelcome;