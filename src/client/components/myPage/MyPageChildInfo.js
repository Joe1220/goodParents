import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/style/MyPageChildInfo.css';
import { Row, Col } from 'reactstrap';

class MyPageChildInfo extends React.Component {
  render() {
    return (
      <div className="mypage_childinfo_main">
        <p className="mypage_childinfo_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 아이정보</p>
        <div className="mypage_childinfo_main_description_box">
          <p id="mypage_childinfo_main_head">우리 아이 정보 확인</p>
          <hr id="mypage_childinfo_main_hr"/>
          <Row id="mypage_childinfo_main_text_first_row">
            <Col sm="1"></Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">이름</p>
            </Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">조영아</p>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">나이</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">1</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">살</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">9</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">개월</p>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">성별</p>
            </Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">남</p>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">몸무게</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">3</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">kg</p>
            </Col>
          </Row>
          <Row>
            <Col sm="1"></Col>
            <Col sm="2">
              <p className="mypage_childinfo_main_text">키</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">65</p>
            </Col>
            <Col sm="1">
              <p className="mypage_childinfo_main_text">cm</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyPageChildInfo;
