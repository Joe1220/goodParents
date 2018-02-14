import React from 'react';
import { Button, Container, Col, Row,
         FormGroup, Label, Input, FormText } from 'reactstrap';
import CartMainList from './CartMainList';
import "../public/style/CartMain.css";

//장바구니 라는 데이터 모음을 만들어서, foodDetail에서 제품을 클릭할 때 data가 만들어지도록 한뒤.... CartListItem으로 데이터를 넘겨준다.
var foodData = [
  '클래식 한우버섯': {
    'id': '한우버섯이 뭐냐',
    'foodName': '클래식 한우버섯',
    'foodPrice': 4500,
    'img': 'http://pds.joins.com/news/component/joongang_jplus/201706/05/27239-162653-1.jpg',
    'count': 0
  },
  '김치찌개': {
    'id': '한우버섯이 뭐냐',
    'foodName': '김치찌개',
    'foodPrice': 6000,
    'img': 'http://pds.joins.com/news/component/joongang_jplus/201706/05/27239-162653-1.jpg',
    'count': 0
  },
  '부대찌개': {
    'id': '부대찌개를 먹어야겠다',
    'foodName': '부대찌개',
    'foodPrice': 7000,
    'img': 'http://pds.joins.com/news/component/joongang_jplus/201706/05/27239-162653-1.jpg',
    'count': 0
  }
];

class CartMain extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="2"></Col>
          {/* 첫번째 라인 */}
          <Col sm="8">
            <p className="text-center cart_header">장바구니</p>
            <p className="text-center cart_header_dec">주문하실 상품평 및 수량을 정확하게 확인해 주세요</p>
            <hr />
            <Row >
              <Col sm="6">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    <FormText className="text-center Cart_first_line_text">전체선택</FormText>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3"><FormText className="text-center Cart_first_line_text">수량</FormText></Col>
              <Col sm="3"><FormText className="text-center Cart_first_line_text">상품금액</FormText></Col>
            </Row>
            <hr />
            {/* 두번째 라인 */}
            <CartMainList />
            {/* 세번째 라인 */}
            <hr />
            <Row className="Cart_second_line_text">
              <Col sm="2">
                <p>상품금액</p>
              </Col>
              <Col sm="2">
                <p>상품할인금액</p>
              </Col>
              <Col sm="2">
                <p>멤버할인금액</p>
              </Col>
              <Col sm="1">
                <p></p>
              </Col>
              <Col sm="2">
                <p>배송비</p>
              </Col>
              <Col sm="1">
                <p></p>
              </Col>
              <Col sm="2">
                <p>결제예정금액</p>
              </Col>
            </Row>
            <Row className="Cart_second_line_text">
              <Col sm="2">
                <p>4,500원</p>
              </Col>
              <Col sm="2">
                <p>0원</p>
              </Col>
              <Col sm="2">
                <p>0원</p>
              </Col>
              <Col sm="1">
                <p>+</p>
              </Col>
              <Col sm="2">
                <p>2500원</p>
              </Col>
              <Col sm="1">
                <p>=</p>
              </Col>
              <Col sm="2">
                <p>7,000원</p>
              </Col>
            </Row>
            <Row id="cart_main_button">
              <Button color="primary" href="/payment">선택상품 주문하기</Button>
            </Row>

          </Col>

          <Col sm="2"></Col>

        </Row>

      </Container>
    );
  }
}

export default CartMain;
