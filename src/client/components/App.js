import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

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
      products: [],
      cart: [],
      quantity: 1,
      totalAmount: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  };

  componentDidMount() {
    axios.get('/foodDetail')
    .then((response)=>{
        this.setState({products: response.data})
    }).catch((error)=>{
      console.log('Error axios', error);
    })
  }

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    if(this.checkProduct(productID)) {
      let index = cartItem.findIndex(item => {
        return item.id === productID;
      });
      cartItem[index].quantity += 1;
      this.setState({
        cart: cartItem
      })
    } else {
      cartItem.push(selectedProducts);
      this.setState({
        cart : cartItem,
        quantity: 1
      });
    }
    this.sumTotalAmount();
  }

  sumTotalAmount() {
    let cart = this.state.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
      total += cart[i].price * Number(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  updateQuantity(qty, id){
    let cart = this.state.cart;
    for (let i = 0; i < cart.length; i++) {
      if(cart[i].id === id) {
        cart[i].quantity = qty;
      }
    }
    this.setState({
      cart: cart
    })
    this.sumTotalAmount();
	}

  checkProduct(id) {
    let cart = this.state.cart;
    return cart.some((item) => {
      return item.id === id;
    })
  }

  renderFoodDetail() {
    return this.state.products.map(product => {
      return (
        <Route exact path={`/foodDetail/${product.id.$oid}`} render={ props => {
          return <FoodDetail
            addToCart={this.handleAddToCart}
            productQuantity={this.state.quantity}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id.$oid}
            ingredients={product.ingredients}
            key={product.id}/>
        }} />
      );
    })
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <Nav
          cartItems={this.state.cart}
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
        {this.renderFoodDetail()}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Footer />
      </div>
    );
  }
}

export default App;
