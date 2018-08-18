import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';


import About from "./About";
import Area from "./Area";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Terms from "./Terms";
import Privacy from "./Privacy";
import FoodDetail from "./FoodDetail";
import Prime from "./Prime";
import Payment from "./Payment";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import MyPage from "./mypage/MyPage";
import AdminPage from "./adminpage/AdminPage";

// 음식 사진 뿌려주기 위한 static file 설정.
import 'file-loader?name=/public/foodPictures/[name].[ext]';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      products: [],
      cart: [],
      fullDate: new Date().toISOString().slice(0, 10),
      account: [],
      orderhistory: [],
      snackbar: {
        account: false,
        fooddetail: false,
        orderCheck: false
      },
      token: cookies.cookies["token"]
    }; 
    this.onChangeFullDate = this.onChangeFullDate.bind(this);
    // 장바구니 관련 메소드
    this.getCart = this.getCart.bind(this);
    this.cartDelete = this.cartDelete.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.qtyRemove = this.qtyRemove.bind(this);
    this.qtyAdd = this.qtyAdd.bind(this);
    // 마이페이지 계정관련 메소드
    this.getAccount = this.getAccount.bind(this);
    this.changeAccount = this.changeAccount.bind(this);
    this.toPayment = this.toPayment.bind(this);
    // 스넥바 메소드
    this.snackbarOpen = this.snackbarOpen.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
    // 주문확인 메소드
    this.getOrderHistory = this.getOrderHistory.bind(this);
  }

  foodDetailFetch() {
    fetch(`/api/products?date=${this.state.fullDate}`)
      .then(response => response.json())
      .then(data => this.setState({ products: data[0].items }))
      .catch(error => console.error(error));
  }

  // 주문확인
  getOrderHistory() {
    const url = "/api/mypage/order"
    fetch(url, {
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        if(data.length) {
          this.setState({ orderhistory: data || [] })
        } else {
          return null;
        }
      })
      // .then(() => {this.forceUpdate();})
      .catch(error => console.error(error));
  }

  // 장바구니 관련 메소드
  getCart() {
    // const upperThis = this;
    fetch(`/api/cart`, {
      Method: "GET",
      credentials: "include"
    })
    .then(response => response.text())
    .then(data => {
      if(data) {
        this.setState({ cart: data.cart })
      }
    })
    // .then(() => { upperThis.forceUpdate(); })
    .catch(error => console.error(error));
  }

  cartDelete(oid) {
    const url = "/api/cart";
    const data = {
      item: oid.id,
      year: Number(oid.year),
      month: Number(oid.month),
      day: Number(oid.day)
    };
    fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.status;
      })
      .then(() => this.getCart())
      .catch(err => console.error(err));
  }

  updateCheck(oid) {
    const url = "/api/cart";
    for (let i in this.state.cart) {
      if (
        this.state.cart[i]._id._id === oid.id &&
        this.state.cart[i].year === oid.year &&
        this.state.cart[i].month === oid.month &&
        this.state.cart[i].day === oid.day
      ) {
        const stateCopy = Object.assign({}, this.state);
        stateCopy.cart[i].checked = !stateCopy.cart[i].checked;
        this.setState(stateCopy);
        const data = {
          item: oid.id,
          year: Number(oid.year),
          month: Number(oid.month),
          day: Number(oid.day),
          checked: this.state.cart[i].checked
        };
        fetch(url, {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.status)
          .then(() => this.getCart());
      }
    }
  }

  qtyRemove(oid) {
    const url = "/api/cart/decrease";
    for (let i in this.state.cart) {
      if (
        this.state.cart[i]._id._id === oid.id &&
        this.state.cart[i].year === oid.year &&
        this.state.cart[i].month === oid.month &&
        this.state.cart[i].day === oid.day
      ) {
        const data = {
          item: oid.id,
          year: Number(oid.year),
          month: Number(oid.month),
          day: Number(oid.day)
        };
        fetch(url, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(() => this.getCart());
      }
    }
  }

  qtyAdd(oid) {
    const url = "/api/cart/increase";
    for (let i in this.state.cart) {
      if (
        this.state.cart[i]._id._id === oid.id &&
        this.state.cart[i].year === oid.year &&
        this.state.cart[i].month === oid.month &&
        this.state.cart[i].day === oid.day
      ) {
        const data = {
          item: oid.id,
          year: Number(oid.year),
          month: Number(oid.month),
          day: Number(oid.day)
        };
        fetch(url, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(() => this.getCart());
      }
    }
  }

  toPayment(data) {
    const upperThis = this;
    fetch("/api/payment", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function () {
      upperThis.props.history.push("/mypage/OrderCheck");
      upperThis.snackbarOpen("orderCheck");
      // upperThis.forceUpdate();
    });
  }

  // 계정관리 관련 메소드
  getAccount() {
    const url = "/api/mypage/account";
    fetch(url, {
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => this.setState({ account: data }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.foodDetailFetch();
    if(this.state.token) {
      this.getCart();
      this.getAccount();
      this.getOrderHistory();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullDate !== this.state.fullDate) {
      this.foodDetailFetch();
    }
    if (prevState.cart !== this.state.cart) {
      this.getCart();
    }
  }

  renderFoodDetail() {
    return this.state.products.map((product, index) => {
      return (
        <Route
          exact
          path={`/foodDetail/${product._id}`}
          key={index}
          render={props => {
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
                snackbar={this.state.snackbar.fooddetail}
                snackbarOpen={this.snackbarOpen}
                snackbarClose={this.snackbarClose}
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

  changeAccount(userinfo) {
    this.setState({ account: userinfo })
    const upperThis = this;
    const url = "/api/mypage/account"
    fetch(url, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(userinfo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        window.sessionStorage.setItem("name", userinfo.name);
        upperThis.props.history.push('/mypage/AccountCheck');
        this.snackbarOpen('account');
      })
  }

  snackbarOpen(name) {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.snackbar[name] = true
    this.setState(stateCopy);
  }

  snackbarClose(name) {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.snackbar[name] = false
    this.setState(stateCopy);
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
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Home
                  {...props}
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

          {/* MyPage */}
          <Route
            path="/mypage"
            render={props => {
              return <MyPage
                {...props}
                account={this.state.account}
                changeAccount={this.changeAccount}
                snackbar={this.state.snackbar}
                snackbarClose={this.snackbarClose}
                orderhistory={this.state.orderhistory}
                getOrderHistory={this.getOrderHistory} />;
            }}
          />
          {/* AdminPage */}
          <Route path="/adminpage" component={AdminPage} />
          <Route
            exact
            path="/payment"
            render={props => {
              return <Payment {...props} toPayment={this.toPayment} />;
            }}
          />
          <Route
            exact
            path="/cartmain"
            render={props => {
              return (
                <Cart
                  {...props}
                  cart={this.state.cart}
                  cartDelete={this.cartDelete}
                  updateCheck={this.updateCheck}
                  qtyRemove={this.qtyRemove}
                  qtyAdd={this.qtyAdd}
                // toPayment={this.toPayment}
                />
              );
            }}
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

export default withRouter((withCookies(App)));