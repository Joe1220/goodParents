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
  hr: { marginTop: "10px", marginBottom: "8px" },
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
  delete: { marginTop: "25px", textAlign: "center", fontWeight: "bold" },
  totaltitle: { width: "828px", height: "30px", display: "inline-block", marginRight: "15px", textAlign: "right", fontWeight: "bold"},
  totalprice: { width: "100px", height: "30px", display: "inline-block", marginRight: "15px", textAlign: "right", fontWeight: "bold"},
  lasthr: { maxWidth: "300px", marginRight: "0px", border: "1px solid gray"},
}


export default class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
    this.renderCart = this.renderCart.bind(this);
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
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
                    onCheck={this.updateCheck.bind(this)}
                    style={styles.checkbox}
                  />
                </div>
                <div style={styles.image}>image</div>
                <div style={styles.titlecontainer}>
                  <div style={styles.itemtitle}>Otcom</div>
                </div>
                <div style={styles.removecontainer}>
                  <FloatingActionButton mini={true} style={{ marginTop: "25px" }}>
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div style={styles.qtycontainer}>
                  <div style={styles.qty}>1</div>
                </div>
                <div style={styles.addcontainer}>
                  <FloatingActionButton mini={true} style={{ marginTop: "25px" }}>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
                <div style={styles.pricecontainer}>
                  <div style={styles.price}>4,500 원</div>
                </div>
                <div style={styles.deletecontainer}>
                  <div style={styles.delete}>
                    <FloatingActionButton mini={true} >
                      <i class="material-icons">delete</i>
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
  render() {
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>장바구니</div>
          {this.renderCart()}
          {/* <hr style={styles.lasthr}/>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <div style={styles.totaltitle} >총액: </div>
            <div style={styles.totalprice}>4,500 원</div>
          </div> */}
          <MuiThemeProvider>
            <RaisedButton label="선택 상품 주문하기" fullWidth={true} primary={true} />
          </MuiThemeProvider>
        </div>
      </Container>
    )
  }
}