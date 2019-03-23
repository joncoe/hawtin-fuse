import React from "react";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";


class ReactSlickCarousel extends React.Component {

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
        ]
      }
    
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
              <div key={i}>
                <img src={`/images/renders/${fileName}.jpg`} alt="F.U.S.E. Vinyl Box Set" />
              </div>
            )
          })
        }         

        </Slider>
      </div>
    );
  }
}

export default ReactSlickCarousel;