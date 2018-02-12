import React from 'react';
import image from '../public/img/about_rice.jpg'
import { Row, Col } from 'reactstrap';

const CartListItem = () => {
  return (
    <div>
      <Row>
        <Col sm="2">
          <img src={image} alt="this is a image" />
        </Col>
      </Row>
    </div>
  );
}

export default CartListItem;
