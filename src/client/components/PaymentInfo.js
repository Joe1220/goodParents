import React from 'react';
import {  Row, Col, CardImg } from 'reactstrap';
import "../public/style/PaymentInfo.css";

const PaymentInfo = ({name, image}) => {
  return (
    <div>
      <br />
      <Row>
        <Col sm="4">
          <CardImg className="payment_info_img" src={image} alt={name}/>
        </Col>
        <Col sm="8" className="payment_info_header_dec">
          <p>{name}</p>
        </Col>
      </Row>
    </div>
  );
}

export default PaymentInfo;
