import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Badge } from 'reactstrap';

class HomeDietFoodBadge extends React.Component {
  renderFoodBadge() {
    return this.props.ingredients.map(ingredient => {
      return (
        <Badge color="danger">{ingredient.name}</Badge>
      );
    })
  }
  render() {
    return (
        <div>
          {this.renderFoodBadge()}
        </div>
    )
  }
}

export default HomeDietFoodBadge;
