import React from 'react';
import "../../public/style/MyPage.css";
import {  Navbar, Nav, NavbarBrand, NavItem, NavLink, DropdownToggle, DropdownMenu , DropdownItem, UncontrolledDropdown, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed1: true,
      collapsed2: true,
      collapsed3: true,
      collapsed4: true,
      collapsed5: true
    }
    this.toggleNavbar1 = this.toggleNavbar1.bind(this);
    this.toggleNavbar2 = this.toggleNavbar2.bind(this);
    this.toggleNavbar3 = this.toggleNavbar3.bind(this);
    this.toggleNavbar4 = this.toggleNavbar4.bind(this);
    this.toggleNavbar5 = this.toggleNavbar5.bind(this);
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
      <div>
        {/* adminpage 상단 navbar */}
        <Navbar color="faded" light toggleable={false}>
          <Link to="/"><NavbarBrand><p id="admin_head">goodparents</p></NavbarBrand></Link>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i class="material-icons">face</i>조진식님
              </DropdownToggle>
              <DropdownMenu>
                <div>
                  <DropdownItem onClick={this.toggleNavbar}>
                    <p>계정관리</p>
                  </DropdownItem>
                  <DropdownItem>
                    <p>로그아웃</p>
                  </DropdownItem>
                </div>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <br />
        {/* adminpage 사이드 navbar */}
        <div className="admin_sidebar_main">
          <Nav vertical>
            <NavItem className="admin_sidebar_main_text">
              <i className="material-icons">chrome_reader_mode</i><p className="admin_sidebar_main_text_vertical">주문확인</p>
            </NavItem>
            <NavItem>
              <NavbarToggler
                className="admin_sidebar_main_toggle_button"
                onClick={this.toggleNavbar1}>
                <NavItem className="admin_sidebar_main_text">
                  <i class="material-icons">autorenew</i><p className="admin_sidebar_main_text_vertical">교환신청</p>
                  {this.state.collapsed1 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
                </NavItem>
              </NavbarToggler>
              <Collapse isOpen={!this.state.collapsed1} navbar>
                <Nav navbar>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>배송지확인</p>
                  </NavItem>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>배송지수정</p>
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
                    <p>배송지확인</p>
                  </NavItem>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>배송지수정</p>
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
                    <p>아이정보</p>
                  </NavItem>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>아이등록</p>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>
            <NavItem>
              <NavbarToggler
                className="admin_sidebar_main_toggle_button"
                onClick={this.toggleNavbar4}>
                <NavItem className="admin_sidebar_main_text">
                  <i class="material-icons">account_balance_wallet</i><p className="admin_sidebar_main_text_vertical">결제정보관리</p>
                  {this.state.collapsed4 ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_down</i> }
                </NavItem>
              </NavbarToggler>
              <Collapse isOpen={!this.state.collapsed4} navbar>
                <Nav navbar>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>결제정보확인</p>
                  </NavItem>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>결제정보업데이트</p>
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
                    <p>배송지확인</p>
                  </NavItem>
                  <NavItem className="admin_sidebar_main_text admin_sidebar_main_sub_text">
                    <p>배송지수정</p>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>
            <NavItem className="admin_sidebar_main_text">
              <i className="material-icons">build</i><p className="admin_sidebar_main_text_vertical">계정관리</p>
            </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}

export default MyPage;
