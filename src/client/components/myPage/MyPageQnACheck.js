import React from 'react';
import '../../public/style/MyPageQnACheck.css';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

class MyPageQnACheck extends React.Component {
  constructor() {
    super();
    this.state = {
      current_page: 1,
    };
  }

  render() {
    return (
      <div className="mypage_qnacheck_main">
        <p className="mypage_qnacheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 1:1 상담</p>
        <div className="mypage_qnacheck_main_description_box">
          <Table size="sm" responsive bordered className="mypage_qnacheck_main_table">
            <thead>
              <tr>
                <th>#</th>
                <th>상담분류</th>
                <th>상담유형</th>
                <th>제목</th>
                <th>답변여부</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>가입장애</td>
                <td>최초 로그인 오류</td>
                <td> 가입이 잘 안됩니다</td>
                <td>요청중</td>
                <td>2018-01-17</td>
              </tr>
              <tr>
                <td>2</td>
                <td>상품</td>
                <td>요일별 식단</td>
                <td>식단 궁금증</td>
                <td>답변완료</td>
                <td>2018-01-16</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default MyPageQnACheck;
