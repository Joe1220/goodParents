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
      cartBounce: false
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  };

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    cartItem.push(selectedProducts);
    this.setState({
      cart : cartItem,
			cartBounce: true
    });
    setTimeout(() => {
      this.setState({
        cartBounce: false
      })
    }, 1000);
    console.log(this.state.cart);
  }

  render() {
    return (
      <div>
        <Nav cartItems={this.state.cart}/>
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
          return <FoodDetail addToCart={this.handleAddToCart} />
        }} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Footer />
      </div>
    );
  }
}

export default App;
