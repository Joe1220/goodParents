import React from 'react';
import "../../public/style/MyPageSidebar.css";
import {  Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyPageSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsedUp: true,
      collapsed1: true,
      collapsed2: true,
      collapsed3: true,
      collapsed4: true,
      collapsed5: true
    }
    this.toggleNavbarUpper = this.toggleNavbarUpper.bind(this);
    this.toggleNavbar1 = this.toggleNavbar1.bind(this);
    this.toggleNavbar2 = this.toggleNavbar2.bind(this);
    this.toggleNavbar3 = this.toggleNavbar3.bind(this);
    this.toggleNavbar4 = this.toggleNavbar4.bind(this);
    this.toggleNavbar5 = this.toggleNavbar5.bind(this);
  }
  toggleNavbarUpper() {
    this.setState({
      collapsedUp: !this.state.collapsedUp
    });
  }
  toggleNavbar1() {
    this.setState({
      collapsed1: !this.state.collapsed1
    });
  }
  toggleNavbar2() {
    this.setState({
      collapsed2: !this.state.collapsed2
    });
  }
  toggleNavbar3() {
    this.setState({
      collapsed3: !this.state.collapsed3
    });
  }
  toggleNavbar4() {
    this.setState({
      collapsed4: !this.state.collapsed4
    });
  }
  toggleNavbar5() {
    this.setState({
      collapsed5: !this.state.collapsed5
    });
  }
  render() {
    return (
      <div className="admin_sidebar_main">
        <Nav vertical>
          <NavItem className="admin_sidebar_main_text">
            <i className="material-icons">chrome_reader_mode</i>
            <Link to="/mypage/ordercheck"><p className="admin_sidebar_main_text_vertical">주문확인</p></Link>
          </NavItem>
          <NavItem>
            <NavbarToggler
              className="admin_sidebar_main_toggle_button"
              onClick={this.toggleNavbar1}>
              <NavItem className="admin_sidebar_main_text">
                <i className="material-icons">autorenew</i><p className="admin_sidebar_main_text_vertical">교환신청</p>
                {this.state.collapsed1 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
              </NavItem>
            </NavbarToggler>
            <Collapse isOpen={!this.state.collapsed1} navbar>
              <Nav navbar>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/changecheck"><p>교환확인</p></Link>
                </NavItem>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/changeapply"><p>교환신청</p></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>
          <NavItem>
            <NavbarToggler
              className="admin_sidebar_main_toggle_button"
              onClick={this.toggleNavbar2}>
              <NavItem className="admin_sidebar_main_text">
                <i className="material-icons">place</i><p className="admin_sidebar_main_text_vertical">배송지관리</p>
                {this.state.collapsed2 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
              </NavItem>
            </NavbarToggler>
            <Collapse isOpen={!this.state.collapsed2} navbar>
              <Nav navbar>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/placecheck"><p>배송지확인</p></Link>
                </NavItem>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/placechange"><p>배송지수정</p></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>
          <NavItem>
            <NavbarToggler
              className="admin_sidebar_main_toggle_button"
              onClick={this.toggleNavbar3}>
              <NavItem className="admin_sidebar_main_text">
                <i className="material-icons">child_care</i><p className="admin_sidebar_main_text_vertical">아이관리</p>
                {this.state.collapsed3 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
              </NavItem>
            </NavbarToggler>
            <Collapse isOpen={!this.state.collapsed3} navbar>
              <Nav navbar>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/childinfo"><p>아이정보</p></Link>
                </NavItem>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/childenrollment"><p>아이등록</p></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>
          <NavItem>
            <NavbarToggler
              className="admin_sidebar_main_toggle_button"
              onClick={this.toggleNavbar4}>
              <NavItem className="admin_sidebar_main_text">
                <i className="material-icons">account_balance_wallet</i><p className="admin_sidebar_main_text_vertical">결제정보관리</p>
                {this.state.collapsed4 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
              </NavItem>
            </NavbarToggler>
            <Collapse isOpen={!this.state.collapsed4} navbar>
              <Nav navbar>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/paycheck"><p>결제정보확인</p></Link>
                </NavItem>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/payupdate"><p>결제정보업데이트</p></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>
          <NavItem>
            <NavbarToggler
              className="admin_sidebar_main_toggle_button"
              onClick={this.toggleNavbar5}>
              <NavItem className="admin_sidebar_main_text">
                <i className="material-icons">group</i><p className="admin_sidebar_main_text_vertical">1:1상담</p>
                {this.state.collapsed5 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
              </NavItem>
            </NavbarToggler>
            <Collapse isOpen={!this.state.collapsed5} navbar>
              <Nav navbar>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/qnacheck"><p>질문확인</p></Link>
                </NavItem>
                <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                  <Link to="/mypage/qnaenrollment"><p>질문신청</p></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </NavItem>
          <NavItem className="admin_sidebar_main_text">
            <i className="material-icons">build</i>
            <Link to="/mypage/account"><p className="admin_sidebar_main_text_vertical">계정관리</p></Link>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default MyPageSidebar;
