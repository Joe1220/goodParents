import React, { Component } from 'react';
import { Container } from 'reactstrap';

import HomeCarousel from './HomeCarousel'
import HomeDatepicker from './HomeDatepicker';
import HomeDiet from './HomeDiet';

import '../public/style/Home.css';

class Home extends Component {
  constructor(props) {
    super(props)
    let today = new Date().getDay();
    this.state = {
      clicked: today
    }
    this.onDayDayChange = this.onDayDayChange.bind(this);
  }
  onDayDayChange(day){
    this.setState({clicked: day})
  }
  render(){
    return(
      <Container className="Home">
        <HomeCarousel />
        <HomeDatepicker 
          clicked={ this.state.clicked }
          onDayDayChange={ this.onDayDayChange }/>
        <HomeDiet 
          products={ this.props.products } 
          addToCart={ this.props.addToCart } />
      </Container>
    )
  }
};

export default Home;
