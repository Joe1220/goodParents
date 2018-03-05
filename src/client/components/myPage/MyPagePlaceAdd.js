import React from 'react';
import '../../public/style/MyPagePlaceAdd.css';
import { Link } from 'react-router-dom';
import { Row, Col, Input, Button,
        Form, FormGroup, Label } from 'reactstrap';

class MyPagePlaceAdd extends React.Component {
  render() {
    return (
      <div className="mypage_placeadd_main">
        <p className="mypage_placeadd_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/placecheck">배송지관리 </Link>
           / 배송지추가
         </p>

         <div className="mypage_placeadd_main_description_box">
           <Form action="post"  className="mypage_placeadd_main_form">
              <Label for="postcode" sm={2}><p className="mypage_placeadd_main_form_label">우편번호</p></Label>
               <FormGroup row>
                <Col sm={5}>
                  <Input className="mypage_placeadd_main_placeholder" type="text" size="sm" name="wPostCode" id="postcode" placeholder="검색해주세요" readonly="readonly" onClick={this.DaumPostCode} />
                </Col>
                <Col sm={2}>
                  <Input type="button" size="sm" onClick={this.DaumPostCode} color="secondary" value="우편번호 검색"/>
                </Col>
              </FormGroup>

              <Label for="address" sm={2}><p className="mypage_placeadd_main_form_label">주소지</p></Label>
              <FormGroup row>
               <Col sm={5}>
                 <Input className="mypage_placeadd_main_placeholder" type="text" size="sm" name="address" id="address" placeholder="입력해주세요" readonly="readonly" onClick={this.DaumPostCode} />
               </Col>
             </FormGroup>

             <Label for="address_detail" sm={2}><p className="mypage_placeadd_main_form_label">상세주소</p></Label>
             <FormGroup row>
              <Col sm={5}>
                <Input className="mypage_placeadd_main_placeholder" type="text" size="sm" name="address_detail" id="address_detail" placeholder="입력해주세요" />
              </Col>
            </FormGroup>
            <Row id="mypage_placeadd_main_form_button">
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

export default MyPagePlaceAdd;
