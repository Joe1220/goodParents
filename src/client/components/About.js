import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../public/style/About.css';
import logo2 from '../public/img/about_cook.png';
import logo3 from '../public/img/about_order.png';
import logo4 from '../public/img/about_delivery.jpg';

const About = () => {
  return(
    <div>
      <Container>
        <Row className="about_row">
          <Col sm="6" className="about_color_box"> 
            <p className="header">매일 새로워지는 영양 맞춤</p>
            <p className="header">맛있는 설계 식단</p>
            <p className="header_des">굿페런트는 매월 신선한 재료를 적극 활용한 맛있는 식단을 제공합니다.</p>
          </Col>
          <Col sm="6" id="about_img_first">
          </Col>
        </Row>

        <Row className="about_row">
          <Col sm="3">
          </Col>
          <Col sm="3">
            <img align="right" src={logo2} alt={logo2}></img>
          </Col>
          <Col sm="3">
            <p className="header_sub">신선한 재료</p>
            <p className="p_number">1.</p>
            <p className="des">듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게.</p>
          </Col>
          <Col sm="3">
          </Col>
        </Row>

        <Row className="about_row">
          <Col sm="3">
          </Col>
          <Col sm="3">
            <p className="header_sub">신선한 재료</p>
            <p className="p_number">2.</p>
            <p className="des">듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게.</p>
          </Col>
          <Col sm="3">
            <img align="right" src={logo3} alt={logo3}></img>
          </Col>
          <Col sm="3">
          </Col>
        </Row>

        <Row className="about_row">
          <Col sm="3">
          </Col>
          <Col sm="3">
            <img align="right" src={logo4} alt={logo4}></img>
          </Col>
          <Col sm="3">
            <p className="header_sub">신선한 재료</p>
            <p className="p_number">3.</p>
            <p className="des">듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게.</p>
          </Col>
          <Col sm="3">
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;
