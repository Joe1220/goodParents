import React from 'react';
import { Container,  Row, Col, Button } from 'reactstrap';
import CartListItem from './CartListItem';
import image1 from '../public/img/about_rice.jpg';
import image2 from '../public/img/home_food.png';

//cartpop 이후 cartmainList이 나오므로, cartPop이 보다 상위.
//cart라는 전체 state가 이쪽 props로 와야할듯.
//우선 이곳에서 지역 state로 해결
// var tempCartList = [
//   {
//     _id: 1,
//     name: '클래식 한우버섯',
//     img: image1,
//     price: 4500,
//     Ingredients: [
//       '한우', '국산 표고 버섯', '현미'
//     ]
//   },
//   {
//     _id: 2,
//     name: '클래식 한우버섯 치즈',
//     img: image2,
//     price: 5000,
//     Ingredients: [
//       '한우', '국산 표고 버섯', '현미', '치즈'
//     ]
//   }
// ];

class CartPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cartList
    }
    this.renderCartListItem = this.renderCartListItem.bind(this);
  }

  renderCartListItem() {
    return this.state.cart.map((item) => {
      return (
        <CartListItem img={item.img} name={item.name} productQuantity={this.props.productQuantity} updateQuantity={this.props.updateQuantity} key={item.name} />
      )
    });
  }

  render() {
    if(this.state.cart.length <= 0) {
      return (
        <Container>
          <Row>
            <Col>
              <h4>Your cart is empty!</h4>
              <br />
              <p>제품을 담아주세요</p>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container>
          {this.renderCartListItem()}
          <Row>
            <Col sm="2"><p>총</p></Col>
            <Col sm="10"><p className="text-right">{this.props.totalAmount} 원</p></Col>
          </Row>

          <Row>
            <Button href="cartmain" color="primary" size="md" block>장바구니</Button>
          </Row>
        </Container>
      )
    }
  }
};



export default CartPop;
