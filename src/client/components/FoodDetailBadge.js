import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

class FoodDetailBadge extends React.Component {
  renderFoodBadge() {
    return this.props.ingredients.map((ingredient, index) => {
      if(index < 3) {
        return (
          <Col sm="4">
            <Badge color="danger">{ingredient.name}</Badge>
            <img src={ingredient.image} alt={ingredient.name} key={index} />
          </Col>

        );
      }
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
