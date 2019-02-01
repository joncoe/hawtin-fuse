import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import ShoppingCartButton from './ShoppingCartButton';

library.add(faArrowAltCircleLeft);

class AlbumDetails extends Component {

  constructor(props) {
    super(props);
    this.tracksArr = [];
    console.log(this.props);
    this.market = this.props.market;
  }

  componentDidMount() {
    console.log('hello component');
  }

  componentWillUnmount() {
    console.log('bye');
  }

  render() {

    const { match: { params } } = this.props;

    const currentAlbum = this.props.selectedAlbumInfo;
    const albumTitle = currentAlbum.title;
    const trackList = currentAlbum.trackList;
    const coverArt = currentAlbum.artwork;
    const albumInfo = currentAlbum.albumInfo;

    return (
      <div className="album-details-page">

        <nav className="go-back">
          <Link to="/albums"><img src="/images/back.svg" alt="Go back to albums page"/></Link>
        </nav>

        <h1>f.u.s.e.</h1>

        <div className="fuse-artwork">
          <img src={`/images/${coverArt}`} alt={`Cover for ${albumTitle}`}/>
        </div>
        
        <h2>{albumTitle}</h2>

        <ul className="fuse-tracklist list-unstyled">
        {trackList.map((track, i) => {
          return (
            <li ref={li => this.tracksArr[i] = li} key={i}>
              <span className="fuse-tracklist-meta">{track.recordSide}</span> {track.title} <span className="fuse-tracklist-meta">{track.totalTime}</span>
            </li>
          );
        })}
        </ul>

        <div className="fuse-album-info">
          {albumInfo}
        </div>

        <div className="fuse-button-container">
          <ShoppingCartButton urlText="Vinyl" url={this.market.vinylUrl} />
          <ShoppingCartButton urlText="Digital" url={this.market.digitalUrl} />
        </div>


      </div>
    );
  }
}

export default AlbumDetails;