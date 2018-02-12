import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../public/style/FoodDetail.css'

class FoodDetail extends Component {
  render(){
    return (
      <Container className="foodDetailContainer">
        <div className="foodDetailInnerContainer">
          <Row>
            <Col>1</Col>
            <Col>2</Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default FoodDetail;