import React from 'react';
import { Link } from 'react-router-dom';
import { Container,  Row, Col, Button } from 'reactstrap';
import CartListItem from './CartListItem';

class CartPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cartItems
    }
    this.renderCartListItem = this.renderCartListItem.bind(this);
  }

  renderCartListItem() {
    return this.state.cart.map((item) => {
      return (
        <CartListItem
          id={item.id}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          updateQuantity={this.props.updateQuantity}
          key={item.name} />
      )
    });
  }

  render() {
    if(this.state.cart.length <= 0) {
      return (
        <Container>
          <Row>
            <Col>
              <h4>Your cart is empty!</h4>
              <br />
              <p>제품을 담아주세요</p>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container>
          {this.renderCartListItem()}
          <Row>
            <Col sm="2"><p>총</p></Col>
            <Col sm="10"><p className="text-right">{(this.props.totalAmount).toLocaleString()} 원</p></Col>
          </Row>

          <Row>
            <Link to="/cartmain"><Button color="primary" size="md" block>장바구니</Button></Link>
          </Row>
        </Container>
      )
    }
  }
};



export default CartPop;
