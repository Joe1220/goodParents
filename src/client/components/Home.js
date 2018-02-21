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
      clicked: today,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate()
    }
    this.onDayDayChange = this.onDayDayChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }
  onDayDayChange(day){
    this.setState({clicked: day})
  }
  onChangeDate(target){
    this.setState({
      year: target.getAttribute('year'),
      month: target.getAttribute('month'),
      date: target.getAttribute('date')
    })
  }
  render(){
    console.log(this.state)
    return(
      <Container className="Home">
        <HomeCarousel />
        <HomeDatepicker 
          clicked={ this.state.clicked }
          onDayDayChange={ this.onDayDayChange }
          onChangeDate={ this.onChangeDate } />
        <HomeDiet 
          products={ this.props.products }
          addToCart={ this.props.addToCart } />
      </Container>
    )
  }
};

export default Home;
