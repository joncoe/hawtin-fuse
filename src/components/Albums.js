import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Albums extends Component {

  constructor(props) {
    super(props);
    // const selectAlbumFunc = this.props.selectAlbumFunc.bind(this);
    console.log(props);


  }

  selectAlbum(i) {
    this.props.selectAlbumFunc(i);
  }

  render() {

    // console.log(this.props.location.pathname);

    return (
      <div>
        ALBUMS PAGE

        <ul>
          <li onClick={() => this.selectAlbum(0)}>Dimension Intrusion</li>
          <li onClick={() => this.selectAlbum(1)}>Train Tracs</li>
          <li onClick={() => this.selectAlbum(2)}>Computer Brain</li>

        {/*
          <li><Link to="/album/dimensions">Dimensions</Link></li>
          <li><Link to="/album/train-tracs">Train Tracs</Link></li>
          <li><Link to="/album/computer-brain">Computer Brain</Link></li>
        */}
        
        </ul>
      </div>
    );
  }
}

export default Albums;