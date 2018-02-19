import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import "../public/style/Area.css";

export class Area extends Component {
  render(){
    const myLatLng = {lat: 37.552600, lng: 127.001412};
    const style = { width: '635px', height: '350px', position: 'relative'};
    return (
      <Container>
        <Jumbotron className="jumbo container">
          <div className="mx-5" style={{width: 25 + 'em'}}>
            <h3 className="display-5 font-weight-bold">신선한 재료를<br />문 앞에서 만나세요</h3>
            <p>&nbsp;</p>
            <p className="lead">최대한 신선한 상품을 전하고자<br />
            주문한 다음 날 도착하는 배송을 시작했습니다.<br />
            클릭 한 번으로 기분 좋은 하루를 선물받으세요.</p>
          </div>
        </Jumbotron>
          <Row className="areaRowContainer">
              <Col className="areaRowContainer_1" lg="5" md="5" sm="5">
                <h4>우리집이 배송 지역인지 확인해보세요</h4>
                <p>It's spreading like wildfire, so in case you are not yet in the delivery area, you can enter your post code below to vote for your area to be added next.</p>
              </Col>
              <Col className="areaRowContainer_2" lg="7" md="7" sm="7">
                <Map google={this.props.google}
                     zoom={11} 
                     style={style}
                     center={myLatLng}></Map>
              </Col>
            </Row>
        </Container>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDu8jK2dZ4f5J8bdCFZyAwyk7r7S604MmU"
})(Area)
