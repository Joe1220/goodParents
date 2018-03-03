import React from 'react';
import '../../public/style/MyPagePlaceCheck.css';
import { Link } from 'react-router-dom';
import { Table, Input } from 'reactstrap';

const MyPagePlaceCheck = () => {
  return (
    <div className="mypage_placecheck_main">
      <p className="mypage_placecheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 배송지관리</p>
      <div className="mypage_placecheck_main_description_box">
        <p id="mypage_placecheck_main_head">배송지 정보 확인</p>
        <hr id="mypage_placecheck_main_hr"/>
        <Table size="sm" responsive bordered className="mypage_placecheck_main_table">
            <thead>
              <tr>
                <th>#</th>
                <th>우편번호</th>
                <th>주소지</th>
                <th>상세주소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Input type="radio" name="radio1" /></td>
                <td>198-109</td>
                <td>서울시 서초구 00동</td>
                <td> 00아파트 00동 00호</td>
              </tr>
              <tr>
                <td><Input type="radio" name="radio1" /></td>
                <td>200-201</td>
                <td>서울시 서초구 00동</td>
                <td> 00아파트 00동 00호</td>
              </tr>
              <tr>
                <td><Input type="radio" name="radio1" /></td>
                <td>200-201</td>
                <td>서울시 서초구 00동</td>
                <td> 00아파트 00동 00호</td>
              </tr>
            </tbody>
        </Table>
      </div>
    </div>
  )
}

export default MyPagePlaceCheck;
