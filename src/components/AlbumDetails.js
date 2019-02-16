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
    this.market = this.props.market;
    this.loadTrack = this.loadTrack.bind(this);
    this.preview = this.props.selectedAlbumInfo.playList;
  }

  componentDidMount() {
    // console.log('hello component');
  }

  componentWillUnmount() {
    // console.log('bye');
  }

  loadTrack(i) {
    if (this.preview) {
      this.props.loadTrack(i);
    }
  }

  render() {

    const { match: { params } } = this.props;

    const currentAlbum = this.props.selectedAlbumInfo;
    const albumTitle = currentAlbum.title;
    const trackList = currentAlbum.trackList;
    const coverArt = currentAlbum.artwork;
    const albumInfo = currentAlbum.albumInfo;
    const preview = currentAlbum.playList;
    let previewMsg;

    if (preview) {
      previewMsg = <p className="album-details-player-instruction">
        <i className="fas fa-headphones"></i> click / tap tracks
      </p>
    } else {
      previewMsg = <p className="album-details-player-instruction no-preview">
        vinyl exclusive. no audio preview.
      </p>
    }


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

        {previewMsg}

        <ul className="fuse-tracklist list-unstyled">
        {trackList.map((track, i) => {
          return (
            <li 
                ref={li => this.tracksArr[i] = li} 
                key={i} 
                onClick={() => {
                  this.loadTrack(i);
                }}
                className={this.preview ? 'preview' : ''}
              
            >
              <span className="fuse-tracklist-meta">{track.recordSide}.</span> {track.title} <span className="fuse-tracklist-meta">{track.totalTime}</span>
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