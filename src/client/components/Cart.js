import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const styles = {
  container: { width: "1110px", marginBottom: "100px" },
  content: { width: "1050px", margin: "0 auto", paddingTop: "15px" },
  title: { fontSize: "25px", fontWeight: "bold" },
  cartcontainer: { backgroundColor: "#efefef", height: "200px", marginTop: "15px", marginBottom: "15px" },
  innercart: { padding: "15px" },
  date: { fontWeight: "normal" },
  when: { fontWeight: "bold" },
  hr: { marginTop: "10px", marginBottom: "23px" },
  checkbox: { marginLeft: "7px", marginTop: "35px" },
  checkboxcontainer: { width: "40px", height: "100px", display: "inline-block", marginRight: "15px" },
  itemtitle: { marginTop: "35px", fontWeight: "bold" },
  image: { border: "1px solid gray", width: "100px", height: "100px", display: "inline-block", marginRight: "15px" },
  titlecontainer: { width: "200px", height: "100px", display: "inline-block", marginRight: "15px" },
  removecontainer: { width: "40px", height: "100px", display: "inline-block", marginRight: "15px" },
  qtycontainer: { width: "15px", height: "100px", display: "inline-block", marginRight: "15px" },
  qty: { marginTop: "35px", textAlign: "center" },
  addcontainer: { width: "350px", height: "100px", display: "inline-block", marginRight: "15px" },
  pricecontainer: { width: "100px", height: "100px", display: "inline-block", marginRight: "15px" },
  price: { marginTop: "35px", textAlign: "right", fontWeight: "bold" },
  deletecontainer: { width: "80px", height: "100px", display: "inline-block" },
  delete: { marginTop: "25px", textAlign: "center", fontWeight: "bold" }
}


export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
    this.renderPaymentBotton = this.renderPaymentBotton.bind(this);
    this.renderCart = this.renderCart.bind(this);
    this.cartDelete = this.cartDelete.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.qtyRemove = this.qtyRemove.bind(this);
    this.qtyAdd = this.qtyAdd.bind(this);
    this.toPayment = this.toPayment.bind(this);
  }

  updateCheck(e) {
    this.props.updateCheck(e.target.getAttribute('id'));
  }
  cartDelete(e) {
    this.props.cartDelete(e.target.getAttribute('id'));
  }
  qtyRemove(e) {
    this.props.qtyRemove(e.target.getAttribute('value'));
  }
  qtyAdd(e) {
    this.props.qtyAdd(e.target.getAttribute('value'));
  }
  toPayment() {
    // this.props.toPayment();
    this.props.history.push("/payment");
  }
  renderCart(){
    if(!this.props.cart.length){
      return (
        <div style={styles.cartcontainer} >
        <div style={styles.innercart}>
            <div style={{ fontWeight: "bold", fontSize: "35px", textAlign: "center", paddingTop: "60px"}}>장바구니에 상품이 없습니다</div>
        </div>
      </div>
      )
    } else {
      return this.props.cart.map((cart, index)=>{
        return (
          <MuiThemeProvider>
          <div style={styles.cartcontainer} >
            <div style={styles.innercart}>
              <div style={styles.date}>{cart.year}년 / {cart.month}월 / {cart.day}일 <span style={styles.when}></span></div>
              <hr style={styles.hr} />
              <div style={{ display: "flex" }}>
                <div style={styles.checkboxcontainer}>
                  <Checkbox
                    checked={cart.checked}
                    id={cart._id._id}
                    onCheck={this.updateCheck}
                    style={styles.checkbox}
                  />
                </div>
                <img src={cart._id.image} alt={cart._id.name} style={styles.image} />
                <div style={styles.titlecontainer}>
                  <div style={styles.itemtitle}>{cart._id.name}</div>
                </div>
                <div style={styles.removecontainer}>
                  <FloatingActionButton value={cart.qty} onClick={this.qtyRemove} mini={true} style={{ marginTop: "25px" }}>
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div style={styles.qtycontainer}>
                  <div style={styles.qty}>{cart.qty}</div>
                </div>
                <div style={styles.addcontainer}>
                  <FloatingActionButton value={cart.qty} onClick={this.qtyAdd} mini={true} style={{ marginTop: "25px" }}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
                <div style={styles.pricecontainer}>
                  <div style={styles.price}>{cart._id.price.toString()[0]},{cart._id.price.toString().slice(1)} 원</div>
                </div>
                <div style={styles.deletecontainer}>
                  <div style={styles.delete}>
                    <FloatingActionButton mini={true} onClick={this.cartDelete}>
                      <i id={cart._id._id} class="material-icons" >delete</i>
                    </FloatingActionButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
        )
      })
    }
  }
  renderPaymentBotton(){
    if(!this.props.cart.length){
      return (
      <MuiThemeProvider>
        <RaisedButton onClick={this.toPayment} disabled={true} label="선택 상품 주문하기" fullWidth={true} primary={true} />
      </MuiThemeProvider>
      )
    } else {
      return (
      <MuiThemeProvider>
        <RaisedButton onClick={this.toPayment}  label="선택 상품 주문하기" fullWidth={true} primary={true} />
      </MuiThemeProvider>
      )
    }
  }
  render() {
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>장바구니</div>
          {this.renderCart()}
          {this.renderPaymentBotton()}
        </div>
      </Container>
    )
  }
}