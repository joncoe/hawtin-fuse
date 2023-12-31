import React, { Component } from 'react';


class AlbumDetails extends Component {

  constructor(props) {
    super(props);
    this.tracksArr = [];
    this.market = this.props.market;
    this.loadTrack = this.loadTrack.bind(this);
    this.preview = this.props.selectedAlbumInfo.playList;
    this.goBack = this.props.goBack;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }



  loadTrack(i) {
    if (this.preview) {
      this.props.loadTrack(i);
    }
  }

  createMarkup(html) {
    return {__html: html};
  }

  render() {

    // const { match: { params } } = this.props;

    const currentAlbum = this.props.selectedAlbumInfo;
    const albumTitle = currentAlbum.title;
    const trackList = currentAlbum.trackList;
    const coverArt = currentAlbum.cover;
    const albumInfo = currentAlbum.albumInfo;
    const preview = currentAlbum.playList;
    let previewMsg;

    if (preview) {
      previewMsg = <p className="album-details-player-instruction">
        <i className="fas fa-headphones"></i> click / tap tracks
      </p>
    } else {
      previewMsg = <p className="album-details-player-instruction no-preview">
      <i className="fas fa-volume-mute"></i> vinyl exclusive. no audio preview.
      </p>
    }


    return (
      <div>
        <div className="album-details-page">

          <div className="fuse-artwork">
            <img src={`/images/${coverArt}`} alt={`Cover for ${albumTitle}`}/>
          </div>
          
        
          <img src="/images/top.svg" alt="" className="yellow-bar hide-mobile yellow-bar-top"/>
          <img src="/images/top-mobile.svg" alt="" className="yellow-bar hide-desktop  yellow-bar-top"/>

          <div className="fuse-album-info-container-blue-dark">
            <div className="fuse-album-info" dangerouslySetInnerHTML={this.createMarkup(albumInfo)}></div>


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


          </div>          

          
        </div>

      </div>
    );
  }
}

export default AlbumDetails;