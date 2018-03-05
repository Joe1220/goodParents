import React from 'react';
import '../../public/style/MyPageChangeApply.css';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class MyPageChangeApply extends React.Component {
  render() {
    return (
      <div className="mypage_changeapply_main">
        <p className="mypage_changeapply_main_upper_Home_text">
          <Link to="/mypage/ordercheck">Home </Link>
          / <Link to="/mypage/changecheck">교환확인 </Link>
           / 교환신청
         </p>

        <div className="mypage_changeapply_main_description_box">
          <Form className="mypage_changeapply_main_cause_select_form">
            <p className="mypage_changeapply_main_cause_select_form_head_text">반품 사유 선택</p>
            <FormGroup check inline className="mypage_changeapply_main_cause_select_radios">
              <Label check className="mypage_changeapply_main_label">
                <Input type="radio" name="radio1"></Input><p className="mypage_changeapply_main_cause_select_radios_text">오배송</p>
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_cause_select_radios_text">배송지연</p>
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_cause_select_radios_text">아이가 먹지 않음</p>
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_cause_select_radios_text">상함</p>
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_cause_select_radios_text">변심</p>
              </Label>
            </FormGroup>

            <p className="mypage_changeapply_main_cause_select_form_head_text">반품 상품 선택</p>
            <FormGroup check inline className="mypage_changeapply_main_item_select_radios">
              <Label check>
                <Input type="radio" name="radio1"></Input><p className="mypage_changeapply_main_item_select_radios_text">2018-2-18</p>
              </Label>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_item_select_radios_text">2018-2-20</p>
              </Label>
              <Label check>
                 <Input type="radio" name="radio1" /><p className="mypage_changeapply_main_item_select_radios_text">2018-2-25</p>
              </Label>
            </FormGroup>

            <FormGroup tag="fieldset">
              <FormGroup check className="mypage_changeapply_main_item_select_sub_radios">
                <Label check>
                  <Input type="radio" name="radio1"></Input><p className="mypage_changeapply_main_item_select_sub_radios_text">소고기 한우 버섯</p>
                </Label>
              </FormGroup>
              <FormGroup check className="mypage_changeapply_main_item_select_sub_radios">
                <Label check>
                  <Input type="radio" name="radio1"></Input><p className="mypage_changeapply_main_item_select_sub_radios_text">소고기 한우 버섯</p>
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText" id="mypage_changeapply_main_textarea_head">반품 사유 및 기타 메세지 입력</Label>
              <Input type="textarea" name="text" id="mypage_changeapply_main_textarea" />
            </FormGroup>

            <p className="mypage_changeapply_main_cause_select_form_head_text">반품 상품 선택</p>
            <FormGroup check>
              <Label check>
                <Input id="tab1" type="radio" name="tab" checked="checked"/>goodParents 지정 택배사
              </Label>
              <Label check>
                <Input id="tab1" type="radio" name="tab" checked="checked"/>타회사
              </Label>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

export default MyPageChangeApply;
