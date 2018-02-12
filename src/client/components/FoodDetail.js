import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import '../public/style/FoodDetail.css'
import image from '../public/img/food_detail_2.jpg'


class FoodDetail extends Component {
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
                오늘<br />
                3월 12일 수요일
              </div>
              <div className="foodDetailTime">
              아침
              <hr align="left"/>
              </div>
              <div className="foodDetailItem">
                클래식 한우버섯
                <div className="foodDetailItemPrice">4,500</div>
                <Button color="primary">장바구니에 담기</Button>
              </div>
              <div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default FoodDetail;