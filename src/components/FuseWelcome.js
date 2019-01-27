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

    this.cycleQuotes = this.cycleQuotes.bind(this);
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
          console.log(index);
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
            <h1><Link to="/albums">f.u.s.e. dimensions</Link></h1>
          </nav>
        </header>

        <section className="fuse-quote-rotation">
          <ul className="list-unstyled">
            <li ref={li => this.quotesArr[0] = li}>
              <p>
                <q>
                  Twenty two year old Richie Hawtin releases his first full solo album
                  and it’s a corker. Including the seminal ‘F.U.’ and ‘Substance Abuse’
                  this is techno, trance, acid and ambience of the highest quality.
                </q><br />
                - Jockey Slut,
                July/August 1993
              </p>
            </li>

            <li ref={li => this.quotesArr[1] = li}>
              <p>
                <q>
                  …’Dimension Intrusion’ is an essential purchase for space-freaks and anyone who enjoys a good hour or two of empirical sonic art.
                </q><br />
                - Melody Maker,
                June 1993
              </p>
            </li>
            <li ref={li => this.quotesArr[2] = li}>
              <p>
                <q>
                  The Train Abuse mix is a floor friendly Armani style repetitive drum pattern, hi-hats and bass. Simple and effective.
                </q><br />
                - Mark and Josh, Mixmag Update,
                September 1993
              </p>
            </li>
            <li ref={li => this.quotesArr[3] = li}>
              <p>
                <q>
                  Reviewing this album track is not applicable as this is a journey of extremely futuristic and experimental music that as a whole is another very well written chapter in the great book of techno.
                </q><br />
                - Mark and Josh, Mixmag Update,
                May 1993
              </p>
            </li>
            <li ref={li => this.quotesArr[4] = li}>
              <p>
                <q>
                  …there’s still a defiant, solitary, almost punky attitude at work here: strange haunting, compulsive. If you don’t like it, it’s your loss.
                </q><br />
                - Rupert Howe, Select,
                July 1993
              </p>
            </li>
            <li ref={li => this.quotesArr[5] = li}>
              <p>
                <q>
                  Hawtin’s name has been synonymous with techno’s outer rings and inner expansion through the 90’s. This is why.
                </q><br />
                - Kris Needs, NM
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default FuseWelcome;