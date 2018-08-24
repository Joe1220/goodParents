import React, { Component } from 'react';

import images from '../public/img/main_carousel-1.jpg'

class HomeCarousel extends Component {
  render() {
    return (
      <div>
        <img src={images} style={{ objectFit: "cover", width: "100%", height: "400px" }} alt="temp" />
      </div>
    )
  }
};

export default HomeCarousel;
