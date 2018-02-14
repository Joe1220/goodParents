import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import "../public/style/Area.css";

const style ={
  width: '450px',
  height: '360px'
}

export class Area extends Component {
  render(){
    return (
      <Container>
        <Jumbotron className="container">
          <div className="mx-5" style={{width: 25 + 'em'}}>
            <h3 className="display-5 font-weight-bold">신선한 재료를<br />문 앞에서 만나세요</h3>
            <p>&nbsp;</p>
            <p className="lead">최대한 신선한 상품을 전하고자<br />
            주문한 다음 날 도착하는 배송을 시작했습니다.<br />
            클릭 한 번으로 기분 좋은 하루를 선물받으세요.</p>
          </div>
        </Jumbotron>
          <Row>
            <Col>
              <div className="mx-5" style={{width: 80 + '%'}}>
                <h4 className="font-weight-bold">배송 지역 검색</h4>
                <h6>우리집이 배송 지역인지 확인해보세요.</h6>
                <p>&nbsp;</p>
                <InputGroup>
                  <Input />
                  <InputGroupAddon addonType="append"><Button>확인하기</Button></InputGroupAddon>
                </InputGroup>
              </div>
            </Col>
            <Col>
              <Map google={this.props.google} zoom={14} style={style}></Map>
            </Col>
          </Row>
        </Container>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDu8jK2dZ4f5J8bdCFZyAwyk7r7S604MmU"
})(Area)