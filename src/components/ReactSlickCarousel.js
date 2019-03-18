import React from "react";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";


class ReactSlickCarousel extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        images: [
          'Fuse_02_rgb',
          'Fuse_01_rgb',
          'Fuse_05_rgb',
          'Fuse_c',
          'Fuse_01_02',
          'Fuse_02_02',
          'Fuse_03_02',
          'Fuse_03_rgb',
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
      lazyLoad: true,
      arrows: false
    };


    return (
      <div className="slick-container">
        <Slider {...settings}>
        {
          this.state.images.map((fileName, i) => {
            return (
              <div key={i}>
                <NavLink to="/albums">
                  <img src={`/images/renders/${fileName}.jpg`} alt="F.U.S.E. Vinyl Box Set" />
                </NavLink>
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