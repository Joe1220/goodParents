import React from 'react';
import "../public/style/CartListItem.css";
import { Row, Col, CardImg, Input } from 'reactstrap';

class CartListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempNum: 1
    }
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
        </Row>
        <hr />
      </div>
    );
  }
}

export default CartListItem;
