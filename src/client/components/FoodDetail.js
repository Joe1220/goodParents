import React, { Component } from 'react';
import { Container, Row, Col, Button, Fade } from 'reactstrap';

import '../public/style/FoodDetail.css'
import image from '../public/img/food_detail_2.jpg'


class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      today: '오늘',
      date: '3월 12일 수요일',
      mealTime: ['아침','점심','저녁'],
      mealItem: [
        { name: '클래식 한우버섯', price: 4500 },
        { name: '클래식 버섯조림', price: 6000 },
        { name: '퓨전 버섯탕수육', price: 4500 },
        { name: '퓨전 가지튀김', price: 4500 }
      ],
      material: [
        {name: '가지', amount: 150, img: ''},
        {name: '피망', amount: 200, img: ''},
        {name: '양파', amount: 150, img: ''},
        {name: '당근', amount: 150, img: ''},
        {name: '오이', amount: 150, img: ''}
      ], 
      nutrient: [
        {name: '비타민', icon: ''},
        {name: '칼슘', icon: ''},
        {name: '철분', icon: ''},
        {name: '마그네슘', icon: ''}
      ],
      calories: 500,
      fadeIn: false
    }
    this.toggle = this.toggle.bind(this);
  }

  render(){
    return (
      <Container className="foodDetailContainer">
        <div className="foodDetailInnerContainer">
          <Row>
            <Col>
              <img className="foodDetailimg" src={image} alt="food"/>
            </Col>
            <Col>
              <div className="foodDetailDate">
                {this.state.today}<br />
                {this.state.date}
              </div>
              <div className="foodDetailTime">
              {this.state.mealTime[0]}
              <hr align="left"/>
              </div>
              <div className="foodDetailItem">
                {this.state.mealItem[1].name}
                <div className="foodDetailItemPrice">{this.state.mealItem[1].price}</div>
                <Button color="primary">장바구니에 담기</Button>
              </div>
              <div className="foodDetailDescriptionButton">
                <Button color="link" onClick={this.toggle}>재료</Button>
                <Button color="link" onClick={this.toggle}>영양소</Button>
              </div>
              <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    이것은 글입니다. <br />
                    calories<br />
                    {this.state.calories}kcal
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
}
}

export default FoodDetail;