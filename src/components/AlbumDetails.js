import React, { Component } from 'react';

class AlbumDetails extends Component {

  constructor(props) {
    super(props);
    this.tracksArr = [];
  }

  componentDidMount() {
    console.log('hello component');
  }

  componentWillUnmount() {
    console.log('bye');
  }

  render() {

    const { match: { params } } = this.props;
    const albumName = params.albumName;

    const currentAlbum = this.props.selectedAlbumInfo;
    // console.log(this.props.selectedAlbumInfo);
    const albumTitle = currentAlbum.title;
    const trackList = currentAlbum.trackList;
    const coverArt = currentAlbum.cover;
    const albumInfo = currentAlbum.albumInfo;

    return (
      <div class="album-details-page">
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
      </div>
    );
  }
}

export default AlbumDetails;