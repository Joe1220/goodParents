import React, { Component } from 'react';
import Slider from 'react-slick';

import images from '../public/img/main_carousel-1.jpg'

class HomeCarousel extends Component {
  render(){
    var settings = {
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 3
    };
    return(
      <div>
        <Slider {...settings}>
          <div className="carousel-inner"><img src={images} alt="temp"/></div>
        </Slider>
      </div>
    )
  }
};

export default HomeCarousel;
