import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../public/style/MyPageChildEnrollment.css';

class MyPageChildEnrollment extends React.Component {
  render() {
    return (
      <div className="mypage_childenrol_main">
        <p className="mypage_childenrol_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/childinfo">아이관리 </Link>
           / 아이등록
         </p>
         <div className="mypage_childenrol_main_description_box">
           <p id="mypage_childenrol_main_head">우리 아이 등록</p>
           <hr id="mypage_childenrol_main_hr"/>
           <Form action="post" id="mypage_childenrol_main_form">
             <FormGroup row>
               <Label for="childenrol_name" sm={2}><p className="mypage_childenrol_main_form_text">이름*</p></Label>
                <Col sm={4}>
                  <Input className="mypage_childenrol_main_placeholder" type="text" name="childenrol_name" id="childenrol_name" placeholder="이름을 입력하세요" />
                </Col>
             </FormGroup>
             <FormGroup row>
               <Label for="childenrol_year" sm={2}><p className="mypage_childenrol_main_form_text">나이*</p></Label>
                <Col sm={3}>
                  <Input className="mypage_childenrol_main_placeholder" type="number" min="2" max="6" name="childenrol_year" id="childenrol_year" placeholder="년도" />
                </Col>
                <Col sm={1}></Col>
                <Label for="childenrol_month" sm={2}><p className="mypage_childenrol_main_form_text">개월*</p></Label>
                <Col sm={3}>
                  <Input className="mypage_childenrol_main_placeholder" type="number" min="2" max="6" name="childenrol_month" id="childenrol_month" placeholder="개월" />
                </Col>
             </FormGroup>
             <FormGroup row id="mypage_childenrol_main_gender_form">
               <Label for="childenrol_gender" sm={2}><p className="mypage_childenrol_main_gender_form_text">성별*</p></Label>
                <Col sm={2}>
                  <Input className="mypage_childenrol_main_radio" type="radio" name="childenrol_gender" id="childenrol_gender_male" />
                  <p>남</p>
                </Col>
                <Col sm={2}>
                  <Input className="mypage_childenrol_main_radio" type="radio" name="childenrol_gender" id="childenrol_gender_femail" />
                  <p>여</p>
                </Col>
              </FormGroup>
              <FormGroup row id="mypage_childenrol_main_kg_form">
                <Label for="childenrol_kg" sm={2}><p className="mypage_childenrol_main_form_text">몸무게*</p></Label>
                 <Col sm={4}>
                   <Input className="mypage_childenrol_main_placeholder" type="number" name="childenrol_kg" id="childenrol_kg" placeholder="몸무게" />
                 </Col>
                 <Col sm={2}>
                   <p className="mypage_childenrol_main_form_sub_text">kg</p>
                 </Col>
              </FormGroup>
              <FormGroup row id="mypage_childenrol_main_cm_form">
                <Label for="childenrol_cm" sm={2}><p className="mypage_childenrol_main_form_text">키*</p></Label>
                 <Col sm={4}>
                   <Input className="mypage_childenrol_main_placeholder" type="number" name="childenrol_cm" id="childenrol_cm" placeholder="키" />
                 </Col>
                 <Col sm={2}>
                   <p className="mypage_childenrol_main_form_sub_text">cm</p>
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

export default MyPageChildEnrollment;
