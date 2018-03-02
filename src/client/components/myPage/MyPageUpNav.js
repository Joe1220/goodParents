import React from 'react';
import "../../public/style/MyPageUpNav.css";
import {  Navbar, Nav, NavbarBrand, DropdownToggle, DropdownMenu , DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyPageUpNav extends React.Component {
  render() {
    return (
      <Navbar color="faded" light toggleable={false}>
        <Link to="/"><NavbarBrand><p id="admin_head">goodparents</p></NavbarBrand></Link>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i className="material-icons">face</i>조진식님
            </DropdownToggle>
            <DropdownMenu>
              <div>
                <DropdownItem onClick={this.toggleNavbarUpper}>
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
    );
  }
}

export default MyPageUpNav;
