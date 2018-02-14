import React from 'react';
import { Container, Row, Col, Jumbotron, Card, CardText, Button} from 'reactstrap';
import "../public/style/Prime.css";

const Prime = () => {
  return(
    <div>
      <Jumbotron className="prime_jumbo container">
        <div className="mx-5" style={{width: 30 + 'em'}}>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p className="prime_header font-weight-bold">프라임 멤버</p>
          <p className="prime_header_dec font-weight-bold">간편한 관리와 매 주문시 10% 할인혜택을 누리세요</p>
        </div>
      </Jumbotron>

      <Container>
        <Row>
          <Col sm="1"></Col>
          <p className="prime_sub_header font-weight-bold">프라임 멤버 혜택</p>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="3" className="text-center">
            <i className="material-icons md-1">local_atm</i>
            <p className="prime_sub_sub_header">10% 할인</p>
            <p>멤버들만 누리는<br></br>특별한 할인 혜택</p>
          </Col>
          <Col sm="3" className="text-center">
            <i className="material-icons md-1">content_paste</i>
            <p className="prime_sub_sub_header">간편한 관리</p>
            <p>멤버쉽 원터치 관리로<br></br>더 간편해집니다</p>
          </Col>
          <Col sm="3" className="text-center">
            <i className="material-icons md-1">redeem</i>
            <p className="prime_sub_sub_header">멤버 혜택</p>
            <p>다양한 혜택과 이벤트</p>
          </Col>
          <Col sm="1"></Col>
        </Row>
        <p>&nbsp;</p>

        <Row>
          <Col sm="1"></Col>
          <p className="prime_sub_header font-weight-bold">가격 안내</p>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="3" className="text-center">
            <Card body className="prime_box">
              <CardText>월</CardText>
              <h1 style={{height: '100px'}}>10,000</h1>
              <CardText>베이직</CardText>
              <p className="card_dec">월 만원,베이직 멤버쉽</p>
              <Button href="/">선택</Button>
            </Card>
          </Col>
          <Col sm="3" className="text-center">
            <Card body className="prime_box">
              <CardText>월</CardText>
              <h1 style={{height: '100px'}}>20,000</h1>
              <CardText>프렌드</CardText>
              <p className="card_dec">월 이만원,프렌드 멤버쉽</p>
              <Button href="/">선택</Button>
            </Card>
          </Col>
          <Col sm="3" className="text-center">
            <Card body className="prime_box">
              <CardText>월</CardText>
              <h1 style={{height: '100px'}}>30,000</h1>
              <CardText>으뜸</CardText>
              <p className="card_dec">월 삼만원,으뜸 멤버쉽</p>
              <Button href="/">선택</Button>
            </Card>
          </Col>
          <Col sm="1"></Col>
        </Row>
        <p>&nbsp;</p>
      </Container>
    </div>
  )
};

export default Prime;
