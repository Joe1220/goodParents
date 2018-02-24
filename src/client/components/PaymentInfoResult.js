import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../public/style/PaymentInfoResult.css";

const PaymentInfoResult = ({totalAmount, resetCart}) => {
  return (
    <Container>
      <Row>
        <Col sm="5" className="payment_result_text">
          <p>상품가격</p>
          <p>할인가격</p>
          <p>배송비</p>
        </Col>
        <Col sm="5" className="text-right payment_result_text">
          <p>{(totalAmount).toLocaleString()} 원</p>
          <p>0원</p>
          <p>2,500원</p>
        </Col>
      </Row>
      <Link to="/"><Button color="primary" block onClick={resetCart}>결제하기</Button></Link>
    </Container>
  );
}

export default PaymentInfoResult;
