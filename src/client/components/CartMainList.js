import React from 'react';
import { Col, Row, FormGroup, Label, Input,
        Card, CardImg } from 'reactstrap';
import "../public/style/CartMainList.css";
import image from '../public/img/about_rice.jpg';

class CartMainList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempNum: 0
    }
  }
  render() {
    return (
      <Row className="cart_main_list_option_text">
        <Col sm="6">
          <FormGroup check>
            <Label check>
              <Row>
                <Col sm="1" className="cart_main_list_option">
                  <Input type="checkbox" />{' '}
                </Col>
                <Col sm="3" className="cart_main_list_img">
                  <CardImg width="100%" src={image} alt="this is food cart image"/>
                </Col>
                <Col sm="7">
                  <p className="text-center cart_main_list_option">클래식 한우버섯</p>
                </Col>
              </Row>
            </Label>
          </FormGroup>
        </Col>
        <Col sm="3">
          <Row className="text-center cart_main_list_option">
            <Col sm="3">
              <i class="material-icons">remove_circle</i>
            </Col>
            <Col sm="4" className="cart_list_count">
              <Input size="sm" placeholder={this.state.tempNum} />
            </Col>
            <Col sm="3">
              <i class="material-icons">add_circle</i>
            </Col>
          </Row>
        </Col>
        <Col sm="2"><p className="text-center cart_main_list_option">4,500원</p></Col>
        <Col sm="1"><p className="text-center cart_main_list_option">x</p></Col>
      </Row>
    );
  }
}

export default CartMainList;
