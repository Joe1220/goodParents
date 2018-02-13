import React from 'react';
import {  Row, Col, CardImg } from 'reactstrap';
import "../public/style/PaymentInfo.css";
import image from '../public/img/about_rice.jpg';

const PaymentInfo = () => {
  return (
    <div>
      <Row>
        <Col sm="4" className="payment_info_img">
          <CardImg width="100%" src={image} alt="this is food image"/>
        </Col>
        <Col sm="8" className="payment_info_header_dec">
          <p>클래식 한우버섯</p>
        </Col>
      </Row>
    </div>
  );
}

export default PaymentInfo;
