import React from 'react';
import '../../public/style/MyPagePlaceChange.css';
import { Link } from 'react-router-dom';
import { Row, Col, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

class MyPagePlaceChange extends React.Component {
  render() {
    return (
      <div className="mypage_placechange_main">
        <p className="mypage_placechange_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/placecheck">배송지관리 </Link>
           / 배송지수정
         </p>
         <div className="mypage_placechange_main_description_box">
           <InputGroup>
             
           </InputGroup>
         </div>
      </div>
    );
  }
}

export default MyPagePlaceChange;


{/* <Form className="mypage_placechange_main_description_box">
  <FormGroup>
    <Label sm="2"><p className="mypage_placechange_main_form_label">우편번호</p></Label>
    <Col sm="5">
      <Input type="text" name="zipcode" className="mypage_placechange_main_placeholder" placeholder="검색해주세요"/>
      <Button sm="4" size="sm" id="zipcode_btn">우편번호검색</Button>
    </Col>
  </FormGroup>
  <FormGroup>
    <Label sm="2"><p className="mypage_placechange_main_form_label">주소지</p></Label>
    <Col sm="10">
      <Input type="text" name="address" className="mypage_placechange_main_placeholder" placeholder="주소를 입력해주세요"/>
    </Col>
  </FormGroup>
  <FormGroup>
    <Label sm="2"><p className="mypage_placechange_main_form_label">상세 주소</p></Label>
    <Col sm="10">
      <Input type="text" name="address_detail" className="mypage_placechange_main_placeholder" placeholder="상세주소를 입력해주세요"/>
    </Col>
  </FormGroup>
</Form> */}
