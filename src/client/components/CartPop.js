import React from 'react';
import { Container,  Row, Col, Button } from 'reactstrap';
import CartListItem from './CartListItem';

class Cart extends React.Component {
  render() {
    return (
      <Container>
        <CartListItem />

        <Row>
          <Col sm="2"><p>총</p></Col>
          <Col sm="10"><p className="text-right">4,500</p></Col>
        </Row>

        <Row>
          <Button href="payment" color="primary" size="md" block>장바구니</Button>
        </Row>
      </Container>
    );
  }
};

export default Cart;
