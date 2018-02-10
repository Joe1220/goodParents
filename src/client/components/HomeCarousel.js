import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i.ytimg.com/vi/Xcyz3noyozU/maxresdefault.jpg',
  },
  {
    src: 'https://i.ytimg.com/vi/Xx0YGEniC4w/maxresdefault.jpg',
  },
  {
    src: 'https://occ-0-2433-444.1.nflxso.net/art/70308/cdd4454607902d841e9a4d16dc0af2b95ee70308.jpg',
  }
];

class HomeCarousel extends Component {
  render(){
    return(
      <div>
        <UncontrolledCarousel items={items} />
      </div>
    )
  }
};

export default HomeCarousel;