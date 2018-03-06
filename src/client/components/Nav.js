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
  Container,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';

import CartPop from './CartPop';
import CartDate from './CartDate';

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
            <DropdownItem href="/about">
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
  render() {
    return (
      <div>
        <Container >
          <Navbar style={{ paddingRight: "0", paddingTop: "13px", borderBottom: "0.5px solid rgb(224,224,224)" }} color="faded" light expand="md">
            <NavbarBrand style={style} href="/">goodParents</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink id="Popover1" onMouseOver={this.OncartOver} href="/cartmain">장바구니</NavLink>
                </NavItem>
                <Popover placement="bottom-end" isOpen={this.state.popOpen} target="Popover1" onMouseOver={this.OncartOver}>
                  <PopoverHeader><CartDate /></PopoverHeader>
                  <PopoverBody>
                    <CartPop
                      cartItems={this.props.cartItems}
                      totalAmount={this.props.totalAmount}
                      updateQuantity={this.props.updateQuantity}
                    />
                  </PopoverBody>
                </Popover>
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