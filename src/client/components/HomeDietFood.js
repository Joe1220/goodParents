import React, { Component } from 'react';
import { Row, Col, Container, Badge } from 'reactstrap';

import image from '../public/img/home_food.png'

class HomeDietFood extends Component {
  render(){
    return (
      <Container className="HomeDietFood">
        <Row>
          <Col >
            아침<hr />
            <img src={image} alt="food"/>
            <div className="foodName">정크푸드</div>
            <div className="foodMaterial">
            <Badge color="danger">한우</Badge>
            <Badge color="info">국산 표고 버섯</Badge>
            <Badge color="success">현미</Badge>
            <Badge color="success">미국산 감자</Badge>
            </div>
            <div className="foodPrice">
              4,500
            </div>
          </Col>
          <Col >
            점심<hr />
            <img src={image} />
            <div className="foodName">정크푸드</div>
            <div className="foodMaterial">
            <Badge color="danger">한우</Badge>
            <Badge color="info">국산 표고 버섯</Badge>
            <Badge color="success">현미</Badge>
            <Badge color="success">미국산 감자</Badge>
            </div>
            <div className="foodPrice">
              4,500
            </div>
          </Col>
          <Col >
            저녁<hr />
            <img src={image} />
            <div className="foodName">정크푸드</div>
            <div className="foodMaterial">
            <Badge color="danger">한우</Badge>
            <Badge color="info">국산 표고 버섯</Badge>
            <Badge color="success">현미</Badge>
            <Badge color="success">미국산 감자</Badge>
            </div>
            <div className="foodPrice">
              4,500
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default HomeDietFood;