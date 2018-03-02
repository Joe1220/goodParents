import React from 'react';
import '../../public/style/MyPageOrderCheck.css';
import { Link } from 'react-router-dom';

const MyPageOrderCheck = () => {
  return (
    <div className="mypage_ordercheck_main">
      <p className="mypage_ordercheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 주문확인</p>
      <div className="mypage_ordercheck_main_description_box">
        총구매
      </div>
    </div>
  )
}

export default MyPageOrderCheck;
