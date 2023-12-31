import React, { Component } from 'react';


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
                    <li>7 x 180g white vinyl records</li>
                    <li>1 x digital download card</li>
                    <li>Limited edition of 500</li>
                    <li>Available to pre-order now</li>
                    <li>Release date: April 15, 2019</li>
                  </ul>
                  </section>

                  
                  

                    <div>
                      <img src="images/top.svg" alt="" className="yellow-bar hide-mobile yellow-bar-top"/>
                      <img src="images/top-mobile.svg" alt="" className="yellow-bar hide-desktop  yellow-bar-top"/>
                    </div>

                    <section className="fuse-text">
                  
                      <div className="exhibit">
                        <div className="text-center">
                          <h2>dimensions<br/>exhibition</h2>
                          <p><span className="text-strike">5-7th April</span><br/>
                          <strong>EXTENDED</strong> to <strong>April 14th</strong><br/>
                          12-7pm</p>
                          <p>Art by<br/><strong>Matthew Hawtin</strong><br/>Music by <br/><strong>Richie Hawtin</strong></p>
                          <p><a href="http://180thestrand.com/" target="_blank" rel="noopener noreferrer">180 The Strand, London (UK)</a></p>
                          <p>Entry: free to attend</p>
                        </div>
                      </div>


                      <div className="exhibit">
                        <p>'Dimensions Exhibition' is a multimedia exhibition experience celebrating the 25th anniversary of Richie Hawtin’s iconic F.U.S.E. albums from 1993.</p>
                        <p>The exhibition presents the original artworks by visual artist Matthew Hawtin and premiers the unreleased F.U.S.E. album 'Computer Space' in an exclusive listening session prior to its official release.</p>
                        <p>For the first time the visual and sonic works that mutually inspired the artists 25 years ago are merged to a cohesive experience for a public audience.</p>
                      </div>

                      <div className="exhibit">
                        <img src="/images/fuse-exhibit-flyer.jpg" alt="Dimensions Exhibit"/>
                      </div>
                    </section>
                  

                 

                </div>
              </main>
            </div>


      </div>
    );
  }
}

export default Albums;