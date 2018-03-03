import React from 'react';
import '../../public/style/MyPageChangeCheck.css';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Input } from 'reactstrap';

class MyPageChangeCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVal: null
    }
  }

  onSiteChanged(e) {
    this.setState({
      currentVal: e.currentTarget.value
    })
  }

  resultRows() {
    return this.props.data.map(result => {
      return (
        <tr>
          <td>{result.data}</td>
          <td>{result.names}</td>
          <td>{result.dec}</td>
          <td>{result.exchange}</td>
          <td>{result.delivery}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="mypage_changecheck_main">
        <p className="mypage_changecheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 주문확인</p>
        <div className="mypage_changecheck_main_description_box">
          <Row>
            <Col sm="2">

            </Col>
            <Col sm="10">
              <Table size="sm" responsive bordered className="mypage_changecheck_main_table">
                <thead>
                  <tr>
                    <th></th>
                    <th>접수일자</th>
                    <th>교환음식</th>
                    <th>신청내용</th>
                    <th>처리상태</th>
                    <th>배송</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Input type="radio" name="radio1" /></td>
                    <td>2018-2-21</td>
                    <td>한우 불고기 버섯 외</td>
                    <td>생각했던 것 보다 양이..</td>
                    <td>교환 완료</td>
                    <td>배송완료</td>
                  </tr>
                  <tr>
                    <td><Input type="radio" name="radio2" /></td>
                    <td>2018-2-25</td>
                    <td>한우 불고기 버섯 외 </td>
                    <td>한입 먹었는데 맛이... </td>
                    <td>교환 완료</td>
                    <td>배송완료</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default MyPageChangeCheck;
