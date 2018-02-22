import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import FoodDetailBadge from './FoodDetailBadge';
import '../public/style/FoodDetail.css';
// import image from '../public/img/food_detail_2.jpg';

class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      today: '오늘',
      date: '3월 12일 수요일',
      mealTime: ['아침','점심','저녁'],
      activeTab: '1',
      selectedProduct: {}
    }
    this.toggle = this.toggle.bind(this);
  }
  addToCart(image, name, price, id,  quantity, checked) {
    this.setState({
      selectedProduct: {
        image: image,
        name: name,
        price: price,
        id: id,
        quantity: quantity,
        checked: checked
      }
    }, function() {
      this.props.addToCart(this.state.selectedProduct);
    })
  }

  toggle(tab) {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render(){
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let ingredients = this.props.ingredients;
    let nutrients = this.props.nutrients;
    let quantity = this.props.productQuantity;
    let checked = this.props.checked;
    return (
      <Container className="foodDetailContainer">
        <div className="foodDetailInnerContainer">
          <Row>
            <Col sm="6">
              <img className="foodDetailimg" src={image} alt="food"/>
            </Col>
            <Col sm="6">
              <div className="foodDetailDate">
                {this.state.today}<br />
                {this.state.date}
              </div>
              <div className="foodDetailTime">
              {this.state.mealTime[0]}
              <hr align="left"/>
              </div>
              <div className="foodDetailItem">
                {name}
                <div className="foodDetailItemPrice"><p>{price.toLocaleString()}원</p></div>
                <Button color="primary" onClick={this.addToCart.bind(this, image, name, price, id, quantity, checked)}>장바구니에 담기</Button>
              </div>
              <div className="foodDetailDescriptionButton">
                <hr align="left"/>
                <Nav tabs>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => {this.toggle('1')}}>
                      <Button color="link">재료</Button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2'})} onClick={() => {this.toggle('2')}}>
                      <Button color="link">영양소</Button>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <FoodDetailBadge datas={ingredients} />
                </TabPane>
                <TabPane tabId="2">
                  <FoodDetailBadge datas={nutrients} />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default FoodDetail;
