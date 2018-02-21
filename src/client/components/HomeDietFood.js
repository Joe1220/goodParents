import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

class HomeDietFood extends Component {
  renderHomeDietFoodList() {
    return this.props.products.map((product, index) => {
      return (
        <Col sm="4">
          <Link to={`/foodDetail/${product._id.$oid}`}><img src={product.image} alt="food"/></Link>
          <div className="foodName">{product.name}</div>
          <div>
            <p>{product.subname}</p>
          </div>
          <div className="foodPrice"><p>{product.price.toLocaleString()}</p></div>
        </Col>
      );
    })
  }

  render(){
    return (
      <Container className="HomeDietFood">
        <Row>
          {this.renderHomeDietFoodList()}
        </Row>
      </Container>
    )
  }
};

export default HomeDietFood;
