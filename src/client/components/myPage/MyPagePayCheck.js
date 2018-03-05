import React from 'react';
import '../../public/style/MyPagePayCheck.css';
import { Link } from 'react-router-dom';

class MyPagePayCheck extends React.Component {
  render() {
    return (
      <div className="mypage_paycheck_main">
        <p className="mypage_paycheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 결제정보관리</p>
        <div className="mypage_paycheck_main_description_box">
          <p id="mypage_paycheck_main_head">신용카드 정보 확인</p>
          <hr id="mypage_paycheck_main_hr"/>
          <p className="mypage_paycheck_main_card_text">신용카드</p>
          <p id="mypage_paycheck_main_card_text_num" className="mypage_paycheck_main_card_text">**** **** **** 4578</p>
        </div>
      </div>
    );
  }
}

export default MyPagePayCheck;
