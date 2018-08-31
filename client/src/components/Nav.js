import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../public/style/Nav.css';

const style = {
  color: "rgb(25,25,221)",
  fontWeight: "bold",
  fontFamily: "PT Serif', serif"
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      popOpen: false,
      count: 0
    };
    this.toggle = this.toggle.bind(this);
    this.OncartOver = this.OncartOver.bind(this);
    this.checkLogged = this.checkLogged.bind(this);
    this.checkCart = this.checkCart.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    window.sessionStorage.removeItem("name")
    window.sessionStorage.removeItem("admim")
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  OncartOver() {
    this.setState({ popOpen: !this.state.popOpen });
  }

  checkLogged() {
    if (window.sessionStorage.getItem("admin") === "true") {
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {window.sessionStorage.getItem("name")}님
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <Link to="/mypage">마이페이지</Link>
            </DropdownItem>
            <DropdownItem>
               <Link to="/adminpage">페이지 관리자</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.handleLogout}>
              <Link to="/">로그아웃</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    } else if (window.sessionStorage.getItem("admin") === "false" && window.sessionStorage.getItem("name")) {
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {window.sessionStorage.getItem("name")}님
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem>
              <Link to="/mypage">마이페이지</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.handleLogout}>
              <Link to="/">로그아웃</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    } else {
      return (
        <NavItem>
          <Link to="/login">로그인</Link>
        </NavItem>
      )
    }
  }
  checkCart() {
    if (window.sessionStorage.getItem("name")) {
      return (
        <MuiThemeProvider>
          <div>
            <NavItem>
              <Avatar
                color={"Black"}
                backgroundColor={"Orange"}
                size={20}
                style={{ marginRight: -5, marginTop: 5 }}
              >
                <span>{this.props.cartCount}</span>
              </Avatar>
            </NavItem>
            <NavItem>
              <Link to="/cartmain">장바구니</Link>
            </NavItem>
          </div>
          
        </MuiThemeProvider>
      )
    }
  }

  render() {
    return (
      <div>
        <Container >
          <Navbar style={{ paddingRight: "0", paddingTop: "13px", borderBottom: "0.5px solid rgb(224,224,224)" }} color="faded" light expand="md">
            <NavbarBrand style={style} href="/">goodParents</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.checkCart()}
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/area">배달구역</Link>
                </NavItem>
                <NavItem>
                  <Link to="/prime">프라임</Link>
                </NavItem>
                {this.checkLogged()}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}