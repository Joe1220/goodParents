import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, Navbar, NavbarBrand,
         DropdownToggle, DropdownMenu , DropdownItem,
         Dropdown} from 'reactstrap';
import CartPop from './CartPop';
import CartDate from './CartDate';
import '../public/style/Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.cartToggle = this.cartToggle.bind(this);

    this.state = {
      collapsedUp: true,
      popOpen: false,
      dropdownOpen: false
    };
    this.toggleNavbarUpper = this.toggleNavbarUpper.bind(this);
    this.renderUserRolePage = this.renderUserRolePage.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggleNavbarUpper() {
    this.setState({
      collapsedUp: !this.state.collapsedUp
    });
  }

  cartToggle() {
    this.setState({ popOpen: !this.state.popOpen });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderUserRolePage() {
    // return (
    //   <Link to="/mypage"><p className="head_obtions"><i className="material-icons">face</i>{this.props.authorize[0]}님</p></Link>
    // )
    // return (
    //   <Nav className="ml-auto" navbar>
    //     <UncontrolledDropdown nav inNavbar>
    //       <DropdownToggle nav caret>
    //         <i class="material-icons">face</i><Link to="/mypage"><p className="head_obtions"> {this.props.authorize[0]}님</p></Link>
    //       </DropdownToggle>
    //       <DropdownMenu>
    //         <div>
    //           <DropdownItem onClick={this.toggleNavbarUpper}>
    //             <p>계정관리</p>
    //           </DropdownItem>
    //           <DropdownItem>
    //             <p>로그아웃</p>
    //           </DropdownItem>
    //         </div>
    //       </DropdownMenu>
    //     </UncontrolledDropdown>
    //   </Nav>
    // )
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          버튼
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><Link to="/mypage/ordercheck">마이페이지</Link></DropdownItem>
          <DropdownItem divider />
          <DropdownItem>계정관리</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  renderLoginPart() {
    return <Link to="/login" ><p className="head_obtions">Log in</p></Link>
  }

  render() {
    return (
      <div className="container navigation">
        <Navbar color="faded">
          <Link to="/area"><p className="head_obtions">배달구역</p></Link>
          <Link to="/prime"><p className="head_obtions">프라임</p></Link>
          <Link to="/"><NavbarBrand><p id="my_head">goodparents</p></NavbarBrand></Link>
          <Link to="/about" ><p className="head_obtions">About</p></Link>
          <Link to="/login" ><p className="head_obtions">Log in</p></Link>
          {/* { this.props.authorize[1] === 1 ? this.renderUserRolePage() : this.renderLoginPart() } */}

          <i id="Popover1" onClick={this.cartToggle} className="material-icons cart">add_shopping_cart</i>
          <Popover placement="bottom-end" isOpen={this.state.popOpen} target="Popover1" toggle={this.cartToggle}>
            <PopoverHeader><CartDate /></PopoverHeader>
            <PopoverBody>
              <CartPop
                cartItems={this.props.cartItems}
                totalAmount={this.props.totalAmount}
                updateQuantity={this.props.updateQuantity}
              />
            </PopoverBody>
          </Popover>

        </Navbar>
      </div>
    );
  }
};

export default Nav;
