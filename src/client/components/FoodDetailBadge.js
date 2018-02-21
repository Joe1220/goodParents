import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

class FoodDetailBadge extends React.Component {
  renderFoodBadge() {
    return this.props.ingredients.map((ingredient, index) => {
      return (
        <Col sm="4">
          <Badge color="primary">{ingredient.name}</Badge>
          <img src={ingredient.image} alt={ingredient.name} key={index} />
        </Col>
      );
    })
  }
  render() {
    return (
        <Row className="FoodDetailBadgeRow">
          {this.renderFoodBadge()}
        </Row>
    )
  }
}

export default FoodDetailBadge;
