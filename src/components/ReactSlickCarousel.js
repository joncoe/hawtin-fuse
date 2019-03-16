import React from "react";
import Slider from "react-slick";


class ReactSlickCarousel extends React.Component {

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 2000,
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
          <div>
            <img src="images/renders/Fuse_01_02.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
              <img src="images/renders/Fuse_01_01.jpg" alt="F.U.S.E. Vinyl Box Set" />   
          </div>
          <div>
            <img src="images/renders/Fuse_02_02.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_02_01.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_01_rgb.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_02_rgb.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_03_02.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_03_01.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_03_rgb.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_05_rgb.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          <div>
            <img src="images/renders/Fuse_c.jpg" alt="F.U.S.E. Vinyl Box Set" />
          </div>
          
        </Slider>
      </div>
    );
  }
}

export default ReactSlickCarousel;