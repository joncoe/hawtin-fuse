import React, { Component } from 'react';

class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: this.props.fileName,
      modalOpen: this.props.modalOpen
    }
  }

  componentWillReceiveProps(newProps) {
    const oldProps = this.props
    if(oldProps.modalOpen !== newProps.modalOpen) {
      this.setState({ 
        modalOpen: this.props.modalOpen
       })
    }
  }


  componentDidUpdate(oldProps) {
    const newProps = this.props
    if(oldProps.modalOpen !== newProps.modalOpen) {
      this.setState({ 
        modalOpen: newProps.modalOpen,
        fileName: newProps.fileName
      })
    }
  }

  render() {
    return (
      <div className={
        this.state.modalOpen ? 'image-modal modal-open' : 'image-modal'
      }>
        
        <div className="image-modal-screen" onClick={this.props.closeModal}></div>

        <div className="full-size-image">
          <img src={`/images/renders/${this.state.fileName}-full.jpg`} alt="F.U.S.E. Vinyl Box Set" />
        </div>

      </div>
    );
  }
}

export default ImageModal;