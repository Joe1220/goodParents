import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Label, Input, option } from 'reactstrap';
import '../../public/style/MyPagePayUpdate.css';

class MyPagePayUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      year: []
    }
    this.renderDay = this.renderDay.bind(this);
    this.renderMonth = this.renderMonth.bind(this);
    this.renderYear = this.renderYear.bind(this);
  }

  renderDay() {
    let arr = []
    for (let i = 1; i <= 31; i++) {
      arr.push(<option key={i} value={i}>{i}</option>); ;
    }
    return arr;
  }

  renderMonth() {
    let arr = []
    for (let i = 1; i <= 12; i++) {
      arr.push(<option key={i} value={i}>{i}</option>); ;
    }
    return arr;
  }

  renderYear() {
    let arr = []
    for (let i = 2010; i <= 2018; i++) {
      arr.push(<option key={i} value={i}>{i}</option>); ;
    }
    return arr;
  }

  render() {
    return (
      <div className="mypage_payupdate_main">
        <p className="mypage_payupdate_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/paycheck">결제정보관리 </Link>
           / 결제정보업데이트
         </p>
         <div className="mypage_payupdate_main_description_box">
           <p id="mypage_payupdate_main_head">신용카드 또는 체크카드 업데이트</p>
           <hr id="mypage_payupdate_main_hr"/>
           <Form action="post" id="mypage_payupdate_main_form">
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="card_num" sm={2}><p className="mypage_payupdate_main_form_text">카드번호*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_placeholder" type="number" name="card_num" id="card_num" placeholder="-를 제외한 번호를 입력하세요" />
                </Col>
             </FormGroup>
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="card_expiration" sm={2}><p className="mypage_payupdate_main_form_text">만료날짜*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_placeholder" type="text" name="card_expiration" id="card_expiration" placeholder="만료날짜(월/연도: 5/17)" />
                </Col>
             </FormGroup>
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="name" sm={2}><p className="mypage_payupdate_main_form_text">이름*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_placeholder" type="text" name="name" id="name" placeholder="이름을 입력해주세요" />
                </Col>
             </FormGroup>
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="day" sm={2}><p className="mypage_payupdate_main_form_text">생일*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_select" type="select" name="day" id="day">
                    {this.renderDay()}
                  </Input>
                </Col>
             </FormGroup>
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="month" sm={2}><p className="mypage_payupdate_main_form_text">생월*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_select" type="select" name="month" id="month">
                    {this.renderMonth()}
                  </Input>
                </Col>
             </FormGroup>
             <FormGroup row className="mypage_payupdate_main_form_group">
               <Label for="year" sm={2}><p className="mypage_payupdate_main_form_text">생년*</p></Label>
                <Col sm={6}>
                  <Input className="mypage_payupdate_main_select" type="select" name="year" id="year">
                    {this.renderYear()}
                  </Input>
                </Col>
             </FormGroup>
             <Row>
               <Col sm="10"></Col>
               <Col sm={2}>
                 <Button color="primary">저장하기</Button>
               </Col>
             </Row>
           </Form>
         </div>
      </div>
    );
  }
}

export default MyPagePayUpdate;
