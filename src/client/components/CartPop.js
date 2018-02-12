import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartListItem from './CartListItem';

class Cart extends React.Component {
  render() {
    return (
      <Container>
        <CartListItem />
      </Container>
    );
  }
};

export default Cart;
