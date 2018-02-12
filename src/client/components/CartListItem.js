import React from 'react';
import image from '../public/img/about_rice.jpg';
import "../public/style/CartListItem.css";
import { Row, Col, Card, CardImg, CardBody, CardText,
         InputGroup, Input, Button } from 'reactstrap';

class CartListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempNum: 0
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col sm="4" className="cart_list_img">
            <CardImg width="100%" src={image} alt="this is food cart image"/>
          </Col>
          <Col sm="8">
            <Row>클래식 한우버섯</Row>
            <Row>
              <Col sm="3">
                <i class="material-icons">add_circle</i>
              </Col>
              <Col sm="4" className="cart_list_count">
                <Input placeholder={this.state.tempNum} />
              </Col>
              <Col sm="3">
                <i class="material-icons">remove_circle</i>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="2"><p>총</p></Col>
          <Col sm="10"><p>4,500</p></Col>
        </Row>
        <Row>
          <Button color="primary" size="md" block>장바구니</Button>
        </Row>
      </div>
    );
  }
}

export default CartListItem;
