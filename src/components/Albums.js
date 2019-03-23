import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';

import {NavLink} from 'react-router-dom';



class Albums extends Component {

  constructor(props) {
    super(props);
    this.albums = this.props.albums;
    this.market = this.props.market;
    this.fuseTitle = null;
    this.textContainer = null;



  }

  selectAlbum(i) {
    this.props.selectAlbumFunc(i);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }




  render() {

    return (
      <div className="albums-container">
      
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

        </header>
      



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

        
          <div id="album-text-clipper">
            <main 
              className="album-text-container"
              ref={main => this.textContainer = main}
              >
              <img src="/images/yellow-bar-white.svg" alt="" className="yellow-bar"/>
                <div className="album-text-box">
                  <section className="fuse-text">

                  <p>‘Dimensions’ is a limited edition vinyl box set celebrating the 25 years anniversary of Richie Hawtin’s original F.U.S.E. releases.</p>

                  <p>The box set features re-releases of the classic albums ‘Dimension Intrusion’ and ‘Train-Tracs’, both including previously unreleased tracks. In addition it premiers the unreleased album ‘Computer Space’, completing the extended range of Hawtin’s recording persona in the formative year of 1993. All albums are re-mastered and pressed on 180g white vinyl. Digital download codes are included. </p>

                  <p>The three album covers are based upon original artworks by visual artist Matthew Hawtin, Richie’s brother, and are included in the box set in form of exclusive artist grade prints.</p>

                  <p>The booklet features a newly written essay by Matthew Hawtin alongside unpublished images and words by Richie Hawtin.</p>

                  <p>The box set itself was custom designed for the anniversary release by Matthew. Its design is based upon the original artwork that inspired the early albums and emphasizes the reciprocal inspiration between the brother’s creative work. </p>


                  <ul className="list-unstyled text-center album-features">
                    <li>Designed by Matthew Hawtin</li>
                    <li>Bespoke hand-crafted box with magnetic closure, soft touch lamination and spot UV finish </li>
                    <li>3 x artist prints of the original album covers, printed on 250gsm somerset velvet paper</li>
                    <li>20pp book with soft touch lamination and spot UV cover </li>
                    <li>8 x 180g white vinyl records</li>
                    <li>1 x digital download card</li>
                    <li>Limited edition of 500</li>
                    <li>Available to pre-order now</li>
                    <li>Release date: April 15, 2019</li>
                  </ul>

                  </section>

                </div>
              </main>
            </div>


      </div>
    );
  }
}

export default Albums;