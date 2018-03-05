import React from 'react';
import '../../public/style/MyPageQnAEnrollment.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

class MyPageQnAEnrollment extends React.Component {
  render() {
    return (
      <div className="mypage_qnaenrol_main">
        <p className="mypage_qnaenrol_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/qnacheck">1:1 상담 </Link>
           / 질문신청
         </p>
         <div className="mypage_qnaenrol_main_description_box">
           <Form action="post" className="mypage_qnaenrol_main_main_cause_select_form">
             <p className="mypage_qnaenrol_main_form_head_text">서비스 구분</p>
             <FormGroup check inline className="mypage_qnaenrol_main_form_group">
               <Label check>
                 <Input type="radio" name="service"></Input><p className="mypage_qnaenrol_main_form_group_text">가입</p>
               </Label>
             </FormGroup>
             <FormGroup check inline className="mypage_qnaenrol_main_form_group">
               <Label check>
                  <Input type="radio" name="service" /><p className="mypage_qnaenrol_main_form_group_text">배송</p>
               </Label>
             </FormGroup>
             <FormGroup check inline className="mypage_qnaenrol_main_form_group">
               <Label check>
                  <Input type="radio" name="service" /><p className="mypage_qnaenrol_main_form_group_text">상품</p>
               </Label>
             </FormGroup>

             <p className="mypage_qnaenrol_main_form_head_text">상담 유형</p>
             <FormGroup check inline className="mypage_qnaenrol_main_form_group">
               <Label check>
                 <Input type="radio" name="return_item"></Input><p className="mypage_qnaenrol_main_form_group_text">맛 이상</p>
               </Label>
               <Label check>
                  <Input type="radio" name="return_item" /><p className="mypage_qnaenrol_main_form_group_text">양 이상</p>
               </Label>
               <Label check>
                  <Input type="radio" name="return_item" /><p className="mypage_qnaenrol_main_form_group_text">요일 별 식단</p>
               </Label>
             </FormGroup>
             <hr className="mypage_qnaenrol_main_hr" />

             <FormGroup row className="mypage_qnaenrol_main_form_group">
               <Label for="title" sm={1}><p className="mypage_qnaenrol_main_form_head_text">제목</p></Label>
                <Col sm={4}>
                  <Input className="mypage_qnaenrol_main_placeholder" type="text" name="title" id="title" placeholder="제목을 입력해주세요" />
                </Col>
             </FormGroup>

             <FormGroup row className="mypage_qnaenrol_main_form_group">
               <Label for="description" sm={1}><p className="mypage_qnaenrol_main_form_head_text">내용</p></Label>
                <Col sm={4}>
                  <Input className="mypage_qnaenrol_main_placeholder" type="textarea" name="description" id="description" placeholder="내용을 입력해주세요" />
                </Col>
             </FormGroup>
             <Row id="mypage_qnaenrol_main_form_button">
               <Col sm="5"></Col>
               <Col sm="2">
                 <Button size="sm" color="primary" block>추가</Button>
               </Col>
               <Col sm="5"></Col>
             </Row>

           </Form>
         </div>
      </div>
    );
  }
}

export default MyPageQnAEnrollment;
