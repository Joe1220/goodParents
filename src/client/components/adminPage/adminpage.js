import React from 'react';
import "../../public/style/adminpage.css";
import {  Navbar, Nav, NavbarBrand, NavItem, NavLink, DropdownToggle, DropdownMenu , DropdownItem, UncontrolledDropdown, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

class adminpage extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="container">
        {/* adminpage 상단 navbar */}
        <Navbar color="faded" light toggleable={false}>
          <Link to="/"><NavbarBrand><p id="admin_head">goodparents</p></NavbarBrand></Link>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i class="material-icons">face</i>조진식님
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem onClick={this.toggleNavbar}>
                  <p>계정관리</p>
                </DropdownItem>
                <DropdownItem>
                  <p>로그아웃</p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        {/* adminpage 사이드 navbar */}
        <div className="admin_sidebar_main">
          <Nav vertical>
            <NavItem>
              <p className="admin_sidebar_main_text">주문확인</p>
            </NavItem>
            <NavItem>
              <p className="admin_sidebar_main_text">교환신청</p>
            </NavItem>
            <NavItem>
              <NavbarToggler onClick={this.toggleNavbar}><p className="admin_sidebar_main_text">배송지관리</p></NavbarToggler>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <p className="admin_sidebar_main_text">아이등록</p>
                  </NavItem>
                  <NavItem>
                    <p className="admin_sidebar_main_text">결제정보관리</p>
                  </NavItem>
                </Nav>
              </Collapse>
            </NavItem>
            <NavItem>
              <p className="admin_sidebar_main_text">아이등록</p>
            </NavItem>
            <NavItem>
              <p className="admin_sidebar_main_text">결제정보관리</p>
            </NavItem>
            <NavItem>
              <p className="admin_sidebar_main_text">질문게시판</p>
            </NavItem>
            <NavItem>
              <p className="admin_sidebar_main_text">계정관리</p>
            </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}

export default adminpage;
