import React from 'react';
import "../public/style/CartListItem.css";
import { Row, Col, CardImg, Input } from 'reactstrap';

class CartListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity
    }

    this.addQuantity = this.addQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
  }
  //아이템 수량 증가 함수
  addQuantity() {
    let quantity = this.state.quantity;
    quantity++;
    this.setState({
      quantity: quantity
    })
  }
  //아이템 수량 감소 함수
  minusQuantity() {
    let quantity = this.state.quantity;
    if(quantity <= 0) {
      return;
    }
    quantity--;
    this.setState({
      quantity: quantity
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="4" className="cart_list_img">
            <CardImg width="100%" src={this.props.img} alt="this is food cart image"/>
          </Col>
          <Col sm="8" className="cart_list_dec">
            <Row><p className="cart_list_dec_text">{this.props.name}</p></Row>
            <Row>
              <Col sm="3">
                <i class="material-icons" onClick={this.minusQuantity}>remove_circle</i>
              </Col>
              <Col sm="4" className="cart_list_count">
                <Input size="sm" placeholder={this.state.quantity} />
              </Col>
              <Col sm="3">
                <i class="material-icons" onClick={this.addQuantity}>add_circle</i>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default CartListItem;
