import React from 'react';
import '../../public/style/MyPageOrderCheck.css';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink,
         Row, Col, Container, Table, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';


class MyPageOrderCheck extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="mypage_ordercheck_main">
        <p className="mypage_ordercheck_main_upper_Home_text"><Link to="/mypage/ordercheck">Home</Link> / 주문확인</p>
        <div className="mypage_ordercheck_main_description_box">
          <Container>
            <Row className="mypage_ordercheck_main_row">
              <Col sm="3">
                <p>총구매</p>
              </Col>
              <Col sm="2">
                <p align="right">2</p>
              </Col>
              <Col sm="2"></Col>
              <Col sm="2">
                <p>마일리지</p>
              </Col>
              <Col sm="3">
                <p align="right">5600</p>
              </Col>
            </Row>
            <hr className="mypage_ordercheck_main_hr"/>
            <Table size="sm" responsive bordered className="mypage_ordercheck_main_table">
              <thead>
                <tr>
                  <th>주문번호</th>
                  <th>주문일자</th>
                  <th>주문내역</th>
                  <th>주문금액/수량</th>
                  <th>주문상태</th>
                  <th>주문자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Y0172957</td>
                  <td>2018.2.21</td>
                  <td>시금치죽</td>
                  <td>5,000/2 </td>
                  <td>배송완료</td>
                  <td>조진식</td>
                </tr>
                <tr>
                  <td>Y0172957</td>
                  <td> 2018.2.21</td>
                  <td>시금치죽</td>
                  <td>5,000/2</td>
                  <td>배송완료</td>
                  <td>조진식</td>
                </tr>
              </tbody>
            </Table>
            <Container className="mypage_ordercheck_main_orderlist">
              <p>1. 2월 23일 수요일, 아침, 클래식 한우 버섯, 배송완료</p>
              <p>2. 2월 24일 목요일, 점심, 싱싱한 가지 무침, 당일 아침 배송 예정</p>
              <p>3. 2월 24일 목요일, 저녁, 송아지 오이 죽, 당일 점심 배송 예정</p>
              <p>4. 2월 26일 토요일, 아침, 무말랭이 당근 죽, 당일 아침 배송 예정</p>
            </Container>
            <Container className="mypage_ordercheck_main_item_list">
              <Row>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}>
                      <p>재료/g</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}>
                      <p>영양소</p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Row>
              <Row>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <ul>
                          <li>소고기</li>
                          <li>당근 14g</li>
                          <li>버섯 50g</li>
                          <li>오이 14g</li>
                          <li>시금치 50g</li>
                          <li>쌀 20g</li>
                        </ul>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <ul>
                          <li className="font-weight-bold">칼로리</li>
                          <li>총 지방 14g</li>
                          <li>콜레스테롤 50g</li>
                          <li>나트륨 14g</li>
                          <li>칼륨 50g</li>
                          <li>단백질 20g</li>
                        </ul>
                      </Col>
                      <Col sm="6">
                        <ul>
                          <li>비타민 A 2 %</li>
                          <li>비타민 C 1%</li>
                          <li>콜레스테롤 50g</li>
                          <li>칼슘 1%</li>
                          <li>철분 17%</li>
                        </ul>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Row>

            </Container>
          </Container>
        </div>
      </div>
    )
  }
}

export default MyPageOrderCheck;
