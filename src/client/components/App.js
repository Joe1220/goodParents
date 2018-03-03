import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import axios from "axios";

import About from "./About";
import Area from "./Area";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Prime from "./Prime";
import Payment from "./Payment";
import FoodDetail from "./FoodDetail";
import CartMain from "./CartMain";
import Login from "./Login";
import Signup from "./Signup";
import MyPage from "./myPage/MyPage";
import MyPageOrderCheck from './myPage/MyPageOrderCheck';
import MyPageChangeCheck from './myPage/MyPageChangeCheck';
import MyPageChangeApply from './myPage/MyPageChangeApply';
import MyPagePlaceCheck from './myPage/MyPagePlaceCheck';
import MyPagePlaceChange from './myPage/MyPagePlaceChange';
import MyPageChildInfo from './myPage/MyPageChildInfo';
import MyPageChildEnrollment from './myPage/MyPageChildEnrollment';
import MyPagePayCheck from './myPage/MyPagePayCheck';
import MyPagePayUpdate from './myPage/MyPagePayUpdate';
import MyPageQnACheck from './myPage/MyPageQnACheck';
import MyPageQnAEnrollment from './myPage/MyPageQnAEnrollment';
import MyPageAccount from './myPage/MyPageAccount';
import NotFoundComponent from "./NotFoundComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      quantity: 1,
      totalAmount: 0,
      checked: true,
      fullDate: new Date().toISOString().slice(0, 10),
      authorize: ['Guest', 1]
    };
    this.resetCart = this.resetCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateChecked = this.updateChecked.bind(this);
    this.updateCheckedAll = this.updateCheckedAll.bind(this);
    this.onChangeFullDate = this.onChangeFullDate.bind(this);
    this.onChangeAuth = this.onChangeAuth.bind(this);
  }

  foodDetailFetch() {
    fetch(`/api/products?date=${this.state.fullDate}`)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.foodDetailFetch();
    //cart state가 local storage에 있으면 불러오기
    let cart = localStorage.cart;
    if (cart) {
      this.setState(
        prevState => ({
          cart: JSON.parse(cart)
        }),
        function() {
          this.sumTotalAmount();
        }
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullDate !== this.state.fullDate) {
      this.foodDetailFetch();
    }
    localStorage.cart = JSON.stringify(this.state.cart);
  }

  resetCart() {
    this.setState({
      cart: []
    });
    alert("결제 완료");
  }

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(item => {
        return item.id === productID;
      });
      cartItem[index].quantity += 1;
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
      this.setState({
        cart: cartItem,
        quantity: 1
      });
    }
    this.sumTotalAmount();
  }

  handleRemoveProduct(id) {
    let cart = this.state.cart;
    let index = cart.findIndex(item => {
      return item.id === id;
    });
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalAmount();
  }

  sumTotalAmount() {
    let cart = this.state.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].checked === true) {
        total += cart[i].price * Number(cart[i].quantity);
      }
    }
    this.setState({
      totalAmount: total
    });
  }

  updateQuantity(qty, id) {
    let cart = this.state.cart;
    let index = cart.findIndex(item => {
      return item.id === id;
    });
    cart[index].quantity = qty;
    this.setState({
      cart: cart
    });
    this.sumTotalAmount();
  }

  updateChecked(id, checked) {
    let cart = this.state.cart;
    let index = cart.findIndex(item => {
      return item.id === id;
    });
    cart[index].checked = checked;
    this.setState({
      cart: cart
    });
    this.sumTotalAmount();
  }

  updateCheckedAll(allChecked) {
    let cart = this.state.cart;
    if (allChecked === true) {
      for (let i = 0; i < cart.length; i++) {
        cart[i].checked = true;
      }
    } else {
      for (let i = 0; i < cart.length; i++) {
        cart[i].checked = false;
      }
    }
    this.setState({
      cart: cart
    });
    this.sumTotalAmount();
  }

  checkProduct(id) {
    let cart = this.state.cart;
    return cart.some(item => {
      return item.id === id;
    });
  }

  renderFoodDetail() {
    return this.state.products.map(product => {
      return (
        <Route
          exact
          path={`/foodDetail/${product._id.$oid}`}
          render={props => {
            return (
              <FoodDetail
                addToCart={this.handleAddToCart}
                productQuantity={this.state.quantity}
                checked={this.state.checked}
                image={product.image}
                name={product.name}
                price={product.price}
                id={product._id.$oid}
                ingredients={product.ingredients}
                nutrients={product.nutrients}
                key={product.id}
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
  onChangeAuth(auth) {
    this.setState({ authorize: auth });
    <Redirect to="/" />
  }

  //일반 권한을 가졌을때 접근 가능한 route
  renderMyPage() {
    return (
      [
        // <Route exact path="/mypage" component={MyPage} />,
        <Route exact path="/mypage/ordercheck" component={MyPageOrderCheck} />,
        <Route exact path="/mypage/changecheck" component={MyPageChangeCheck} />,
        <Route exact path="/mypage/changeapply" component={MyPageChangeApply} />,
        <Route exact path="/mypage/placecheck" component={MyPagePlaceCheck} />,
        <Route exact path="/mypage/placechange" component={MyPagePlaceChange} />,
        <Route exact path="/mypage/childinfo" component={MyPageChildInfo} />,
        <Route exact path="/mypage/childenrollment" component={MyPageChildEnrollment} />,
        <Route exact path="/mypage/paycheck" component={MyPagePayCheck} />,
        <Route exact path="/mypage/payupdate" component={MyPagePayUpdate} />,
        <Route exact path="/mypage/qnacheck" component={MyPageQnACheck} />,
        <Route exact path="/mypage/qnaenrollment" component={MyPageQnAEnrollment} />,
        <Route exact path="/mypage/account" component={MyPageAccount} />
      ]
    )
  }

  render() {
    const isHeaderRoute = (window.location.pathname.includes('mypage') && this.state.authorize[1] === 1);

    return (
      <div>
        {!isHeaderRoute ? (
          <Nav
            cartItems={this.state.cart}
            totalAmount={this.state.totalAmount}
            updateQuantity={this.updateQuantity}
            authorize={this.state.authorize}
          />
        ) : <MyPage /> }

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Home
                  products={this.state.products}
                  onChangeFullDate={this.onChangeFullDate}
                  fullDate={this.state.fullDate}
                />
              );
            }}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/area" component={Area} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/prime" component={Prime} />

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
            render={props => {
              return (
                <CartMain
                  totalAmount={this.state.totalAmount}
                  cartItems={this.state.cart}
                  updateQuantity={this.updateQuantity}
                  handleRemoveProduct={this.handleRemoveProduct}
                  updateChecked={this.updateChecked}
                  updateCheckedAll={this.updateCheckedAll}
                />
              );
            }}
          />

          <Route exact
                 path="/login"
                 render={props => {
                   return <Login onAuth={ this.onChangeAuth } />
                 }}
                 />
          <Route exact path="/signup" component={Signup} />
          {/* 유저 권한별 렌더링 함수 */}
          { this.state.authorize[1] === 1 ?  this.renderMyPage() : null }
          {/* 각 음식들의 detail 페이지  */}
          {this.renderFoodDetail()}
          <Route component={NotFoundComponent} />
        </Switch>
        {!isHeaderRoute ? <Footer /> : null}
      </div>
    );
  }
}

export default App;
