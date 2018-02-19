import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import tempData from '../products.json';

import About from './About';
import Area from "./Area";
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Terms from './Terms'
import Privacy from './Privacy';
import Prime from './Prime';
import Payment from './Payment';
import FoodDetail from './FoodDetail'
import CartMain from './CartMain';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: tempData,
      cart: [],
      quantity: 1,
      totalAmount: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  };

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    cartItem.push(selectedProducts);
    this.setState({
      cart : cartItem,
      quantity: 1
    });
    this.sumTotalAmount();
  }

  sumTotalAmount() {
    let cart = this.state.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    })
  }

  updateQuantity(qty) {
    this.setState({
      quantity: qty
    });
  }

  render() {
    return (
      <div>
        <Nav
          cartItems={this.state.cart}
          productQuantity={this.state.quantity}
          totalAmount={this.state.totalAmount}
          updateQuantity={this.updateQuantity}
        />
        <Route exact path="/" render={ props => {
          return <Home products={this.state.products} />
        }} />
        <Route exact path="/about" component={About} />
        <Route exact path="/area" component={Area} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/prime" component={Prime} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cartmain" component={CartMain} />
        {/* <Route exact path="/fooddetail" component={FoodDetail} /> */}
        <Route exact path="/FoodDetail" render={ props => {
          return <FoodDetail addToCart={this.handleAddToCart} productQuantity={this.state.quantity}/>
        }} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Footer />
      </div>
    );
  }
}

export default App;
