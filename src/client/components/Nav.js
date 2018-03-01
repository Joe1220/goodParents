import React from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, Navbar, NavbarBrand } from 'reactstrap';
import CartPop from './CartPop';
import CartDate from './CartDate';
import '../public/style/Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.cartToggle = this.cartToggle.bind(this);

    this.state = {
      popOpen: false
    };
  }

  cartToggle() {
    this.setState({ popOpen: !this.state.popOpen });
  }

  renderUserRolePage() {
    if(this.props.authorize[1] === 1) {
      return <Link to="/mypage">mypage</Link>
    }
    return <p></p>
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
          { this.renderUserRolePage() }
        </Navbar>
      </div>
    );
  }
};

export default Nav;
