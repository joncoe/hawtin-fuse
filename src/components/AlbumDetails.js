import React, { Component } from 'react';

class AlbumDetails extends Component {

  componentDidMount() {
    console.log('hello component');
  }

  componentWillUnmount() {
    console.log('bye');
  }

  render() {

    const { match: { params } } = this.props;
    const albumName = params.albumName;
    console.log(params)

    return (
      <div>
        <h2>Single Album Details</h2>

        <p>album name is {albumName}</p>
      </div>
    );
  }
}

export default AlbumDetails;