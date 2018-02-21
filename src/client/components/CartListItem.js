import React from 'react';
import "../public/style/CartListItem.css";
import { Row, Col, CardImg } from 'reactstrap';
import CartCounter from './CartCounter';

class CartListItem extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="4" className="cart_list_img">
            <CardImg width="80%" src={this.props.image} alt="this is food cart image"/>
          </Col>
          <Col sm="8" className="cart_list_dec">
            <Row><p className="cart_list_dec_text">{this.props.name}</p></Row>
            <CartCounter id={this.props.id} quantity={this.props.quantity} updateQuantity={this.props.updateQuantity}/>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default CartListItem;
