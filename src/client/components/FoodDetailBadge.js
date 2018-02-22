import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import '../public/style/FoodDetailBadge.css';

class FoodDetailBadge extends React.Component {
  renderFoodBadge() {
    return this.props.datas.map((data, index) => {
      return (
        <Col sm="4">
          <Badge color="primary">{data.name}</Badge>
          <img className="FoodDetailBadgeImg" src={data.image} alt={data.name} key={index} />
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
