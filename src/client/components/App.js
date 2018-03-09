import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import About from "./About";
import Area from "./Area";
import Home from "./Home";
import Nav from "./Nav"
import Footer from "./Footer";
import Terms from "./Terms";
import Privacy from "./Privacy";
import FoodDetail from './FoodDetail';
import Prime from "./Prime";
import Payment from "./Payment";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import MyPage from "./mypage/MyPage";
import AdminPage from "./adminpage/AdminPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      fullDate: new Date().toISOString().slice(0, 10),
    };
    this.onChangeFullDate = this.onChangeFullDate.bind(this);
    this.getCart = this.getCart.bind(this);
    this.cartDelete = this.cartDelete.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.qtyRemove = this.qtyRemove.bind(this);
    this.qtyAdd = this.qtyAdd.bind(this);
  }

  foodDetailFetch() {
    fetch(`/api/products?date=${this.state.fullDate}`)
      .then(response => response.json())
      .then(data => this.setState({ products: data[0].items }))
      .catch(error => console.error(error));
  }
  getCart() {
    fetch(`/api/cart`,{
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => this.setState({ cart: data.cart }))
      .catch(error => console.error(error));
  }
  cartDelete(oid) {
    const url = '/api/cart';
    const data = { item: oid };
      fetch(url,{
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( res => {
      return res.status
    })
    .catch(err => console.error(err));
    this.getCart();
  }
  updateCheck(oid) {
    console.log(oid)
  }
  qtyRemove(qty) {
    console.log(qty)
  }
  qtyAdd(qty) {
    console.log(qty)
  }
  toPayment() {
    
  }
  componentDidMount() {
    this.foodDetailFetch();
    this.getCart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullDate !== this.state.fullDate) {
      this.foodDetailFetch();
    }
    localStorage.cart = JSON.stringify(this.state.cart);
  }

  renderFoodDetail() {
    return this.state.products.map((product, index) => {
      return (
        <Route
          exact
          path={`/foodDetail/${product._id}`}
          key={index}
          render={ (props) => {
            return (
              <FoodDetail
                {...props}
                checked={this.state.checked}
                image={product.image}
                name={product.name}
                price={product.price}
                id={product._id}
                ingredients={product.ingredients}
                nutrients={product.nutrients}
                fullDate={this.state.fullDate}
                subname={product.subname}
                calorie={product.calorie}
              />
            );
          }}
        />
      );
    });
  }

  onChangeFullDate(fullDate) {
    this.setState({ fullDate: fullDate });
  }
  render() {
    return (
      <div>
        <Nav
          cartItems={this.state.cart}
          totalAmount={this.state.totalAmount}
          updateQuantity={this.updateQuantity}
          route={this.renderMyPage}
          />
        <Switch>
          <Route exact path="/" render={ (props) => { return (
              <Home
                {...props}
                products={this.state.products}
                onChangeFullDate={this.onChangeFullDate}
                fullDate={this.state.fullDate}
              /> );
            }}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/area" component={Area} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/prime" component={Prime} />
          {/* MyPage */} 
          <Route path="/mypage" component={MyPage} />
          {/* AdminPage */}
          <Route path="/adminpage" component={AdminPage} />
          <Route
            exact
            path="/payment"
            render={props => {
              return (
                <Payment
                  cartItems={this.state.cart}
                  totalAmount={this.state.totalAmount}
                  resetCart={this.resetCart}
                />
              );
            }}
          />
          <Route
            exact
            path="/cartmain"
            render={(props) => { 
              return <Cart 
                      { ...props } 
                      cart={this.state.cart}
                      cartDelete={this.cartDelete}
                      updateCheck={this.updateCheck}
                      qtyRemove={this.qtyRemove}
                      qtyAdd={this.qtyAdd}
                      toPayment={this.toPayment}
                      /> }
              }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* 음식 상세페이지 라우터 정의 */}
          {this.renderFoodDetail()}
        </Switch>
        <Footer />
      </div>
    );
  }
}


