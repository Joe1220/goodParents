import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../public/style/Nav.css';

const Nav = () => {
    return (
        <div className="container navigation">
          <Navbar color="faded">
            <Link to="/area"><p className="head_obtions">배달구역</p></Link>
            <Link to="/prime"><p className="head_obtions">프라임</p></Link>
            <NavbarBrand  href="/"><p id="my_head">goodparents</p></NavbarBrand>
            <Link to="/about" ><p className="head_obtions">About</p></Link>
            <Link to="/login" ><p className="head_obtions">로그인</p></Link>
            <Link to="/cart" ><i class="material-icons cart">add_shopping_cart</i></Link>
          </Navbar>
        </div>
    );
};

export default Nav;
