import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Badge } from 'reactstrap';
import HomeDietFoodBadge from './HomeDietFoodBadge';

import image from '../public/img/home_food.png'

var mealTime = ['아침','점심','저녁'];

class HomeDietFood extends Component {
  constructor(props) {
    super(props);
  }

  renderHomeDietFoodList() {
    return this.props.products.map((product, index) => {
      return (
        <Col>
          {mealTime[index]}<hr align="left"/>
          <Link to="/fooddetail"><img src={product.image} alt="food"/></Link>
          <div className="foodName">{product.name}</div>
          <div className="foodMaterial">
          {/* <Badge color="danger">한우</Badge>
          <Badge color="info">국산 표고 버섯</Badge>
          <Badge color="success">현미</Badge> */}
          <HomeDietFoodBadge ingredients={product.ingredients}/>
          </div>
          <div className="foodPrice">{Number(product.price).toLocaleString()}</div>
        </Col>
      );
    })
  }
  render(){
    return (
      <Container className="HomeDietFood">
        <Row>
          {this.renderHomeDietFoodList()}
        </Row>
      </Container>
    )
  }
};

export default HomeDietFood;
