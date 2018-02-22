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
    this.onChangeDate = this.onChangeDate.bind(this);
  }
  onDayDayChange(day){
    this.setState({clicked: day})
  }
  onChangeDate(target){
    const localDate = new Date(target.getAttribute('year'), target.getAttribute('month'), target.getAttribute('date'));
    const localOffset = localDate.getTimezoneOffset() * 60000;
    const fullDate = new Date(localDate.getTime()-localOffset).toISOString().slice(0,10);
    this.props.onChangeFullDate(fullDate);
  }
  
  render(){
    return(
      <Container className="Home">
        <HomeCarousel />
        <HomeDatepicker 
          clicked={ this.state.clicked }
          onDayDayChange={ this.onDayDayChange }
          onChangeDate={ this.onChangeDate } />
        <HomeDiet 
          products={ this.props.products }
          addToCart={ this.props.addToCart }
          fullDate={ this.props.fullDate} />
      </Container>
    )
  }
};

export default Home;
