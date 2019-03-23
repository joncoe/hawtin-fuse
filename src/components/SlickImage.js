import React, { Component } from 'react';

class SlickImage extends Component {

  render() {

    return (  
      <div>
        <img 
          src={this.props.fileName} alt="F.U.S.E. Vinyl Box Set" 
          onClick={() => this.props.openModal(this.props.index)}
        />
      </div>
      
    );
  }
}

export default SlickImage;