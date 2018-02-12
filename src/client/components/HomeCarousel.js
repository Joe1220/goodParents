import React, { Component } from 'react';
import { UncontrolledCarousel, Container } from 'reactstrap';

import images from '../public/img/main_carousel-1.jpg'

const items = [
  {
    src: `${images}`,
  },
  {
    src: `${images}`,
  },
  {
    src: `${images}`,
  }
];

class HomeCarousel extends Component {   
  render(){
    return(
      <UncontrolledCarousel items={items} />
    )
  }
};

export default HomeCarousel;