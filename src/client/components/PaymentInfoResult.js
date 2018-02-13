import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "../public/style/PaymentInfoResult.css";

const PaymentInfoResult = () => {
  return (
    <Container>
      <Row>
        <Col sm="5" className="payment_result_text">
          <p>상품가격</p>
          <p>할인가격</p>
          <p>배송비</p>
        </Col>
        <Col sm="5" className="text-right payment_result_text">
          <p>4,500원</p>
          <p>0원</p>
          <p>2,500원</p>
        </Col>
      </Row>
      <Button color="primary" block>결제하기</Button>
    </Container>
  );
}

export default PaymentInfoResult;
