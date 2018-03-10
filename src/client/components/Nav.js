import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
      popOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.OncartOver = this.OncartOver.bind(this);
    this.checkLogged = this.checkLogged.bind(this);
    this.checkCart = this.checkCart.bind(this);
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
            <DropdownItem href="/mypage">
              마이페이지
            </DropdownItem>
            <DropdownItem href="/adminpage">
              관리자 페이지
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/about">
              로그아웃
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
            <DropdownItem href="/mypage">
              마이페이지
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/about">
              로그아웃
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    } else {
      return (
        <NavItem>
          <NavLink href="login">로그인</NavLink>
        </NavItem>
      )
    }
  }
  checkCart() {
    if (window.sessionStorage.getItem("name")) {
      return (
        <MuiThemeProvider>
          <NavItem>
            <Avatar
            color={"Black"}
            backgroundColor={"Orange"}
            size={20}
            style={{marginRight: -5, marginTop: 5}}
            >
              {this.props.cartItems.length}
            </Avatar>
          </NavItem>
          <NavItem>
              <NavLink href="/cartmain">장바구니</NavLink>
          </NavItem>
        </MuiThemeProvider>
      )
    } else {
      return '';
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
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="area">배달구역</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="prime">프라임</NavLink>
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