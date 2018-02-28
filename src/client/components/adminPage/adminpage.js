import React from 'react';
import "../../public/style/adminpage.css";
import {  Navbar, Nav, NavbarBrand, DropdownToggle, DropdownMenu , DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

class adminpage extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar color="faded" light toggleable={false}>
          <Link to="/"><NavbarBrand><p id="admin_head">goodparents</p></NavbarBrand></Link>

          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i class="material-icons">face</i>조진식님
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  <p>계정관리</p>
                </DropdownItem>
                <DropdownItem>
                  <p>로그아웃</p>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default adminpage;
