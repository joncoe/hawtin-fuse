import React from "react";
import Slider from "react-slick";
import ImageModal from './ImageModal';
import SlickImage from './SlickImage';


class ImagesCarousel extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        images: [
          'fuse-box-1',
          'fuse-box-2',
          'Fuse_c',
          'Fuse_03_rgb',
          'Fuse_01_02',
          'Fuse_02_02',
          'Fuse_03_02'
        ],
        currentIndex: 0,
        modalOpen: false
      }

      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    
  }

  openModal(i) {
    this.setState({
      currentIndex: i,
      modalOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalOpen: false
    })
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: false,
      arrows: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true
    };

    return (
      <div className="slick-container">
        <Slider {...settings}>
        {
          this.state.images.map((fileName, i) => {
            return (
              <SlickImage key={i} 
                openModal={this.openModal} 
                fileName={`/images/renders/${fileName}.jpg`} 
                index={i}/>
            )
          })
        }         

        </Slider>

        <ImageModal 
          modalOpen={this.state.modalOpen} 
          fileName={this.state.images[this.state.currentIndex]} 
          closeModal={this.closeModal}
        />

      </div>
    );
  }
}

export default ImagesCarousel;