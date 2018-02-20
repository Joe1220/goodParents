import React from 'react';
import { Col, Row, FormGroup, Label, Input,
        CardImg, Button } from 'reactstrap';
import "../public/style/CartMainList.css";
import CartCounter from './CartCounter';

class CartMainList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRemoveProduct(id) {
    this.props.handleRemoveProduct(id);
  }
  onCheckboxBtnClick(id) {
    this.props.onCheckboxBtnClick(id);
  }
  render() {
    return (
      <Row className="cart_main_list_option_text">
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Row>
                <Col sm="1" className="cart_main_list_option">
                  <Input type="checkbox" onClick={this.onCheckboxBtnClick.bind(this, this.props.id)}/>{' '}
                </Col>
                <Col sm="3" className="cart_main_list_img">
                  <CardImg width="100%" src={this.props.image} alt="this is food cart image"/>
                </Col>
                <Col sm="7">
                  <p className="text-center cart_main_list_option">{this.props.name}</p>
                </Col>
              </Row>
            </Label>
          </FormGroup>
        </Col>
        <Col sm="3">
          {/* <Row className="text-center cart_main_list_option">
            <Col sm="3">
              <i class="material-icons">remove_circle</i>
            </Col>
            <Col sm="4" className="cart_list_count">
              <Input size="sm" placeholder={this.props.quantity} />
            </Col>
            <Col sm="3">
              <i class="material-icons">add_circle</i>
            </Col>
          </Row> */}
          <CartCounter id={this.props.id} quantity={this.props.quantity} updateQuantity={this.props.updateQuantity}/>
        </Col>
        <Col sm="2"><p className="text-center cart_main_list_option">{(this.props.price * this.props.quantity).toLocaleString()}원</p></Col>
        <Col sm="1"><Button className="text-center cart_main_list_option" onClick={this.handleRemoveProduct.bind(this, this.props.id)}>x</Button></Col>
      </Row>
    );
  }
}

export default CartMainList;
