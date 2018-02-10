import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import '../public/style/Footer.css';

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
          <Col xs="6">
            <Link to="/terms">이용약관</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/privacy">개인정보처리방침</Link>
          </Col>
          <Col xs="6">
            고객센터<br />
            010-0000-0000<br />
            info@goodparents.org
          </Col>
      </Row>
    </Container>
  )
}

export default Footer;