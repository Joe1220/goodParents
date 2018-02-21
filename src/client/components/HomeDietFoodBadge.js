import React from 'react';
import { Badge } from 'reactstrap';

class HomeDietFoodBadge extends React.Component {
  renderFoodBadge() {
    return this.props.ingredients.map(ingredient => {
      return (
        <Badge color="primary">{ingredient.name}</Badge>
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
