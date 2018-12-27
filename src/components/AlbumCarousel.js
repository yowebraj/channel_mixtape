import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AlbumCover from "./AlbumCover";

// https://react-slick.neostack.com/docs/api/ for Slick API reference

class AlbumCarousel extends React.Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      arrows: false,
      speed: 500
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <AlbumCover/>
          </div>
          <div>
            <AlbumCover/>
          </div>
          <div>
            <AlbumCover/>
          </div>
          <div>
            <AlbumCover/>
          </div>
          <div>
            <AlbumCover/>
          </div>
          <div>
            <AlbumCover/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default AlbumCarousel