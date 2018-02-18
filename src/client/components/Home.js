import React from 'react';
import { Container } from 'reactstrap';

import HomeCarousel from './HomeCarousel'
import HomeDatepicker from './HomeDatepicker';
import HomeDiet from './HomeDiet';

import '../public/style/Home.css';

const Home = ({products, addToCart}) => {
  return(
    <Container className="Home">
      <HomeCarousel />
      <HomeDatepicker />
      <HomeDiet products={products} addToCart={addToCart} />
    </Container>
  )
};

export default Home;
