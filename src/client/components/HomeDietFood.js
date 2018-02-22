import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeDietFood extends Component {
  renderHomeDietFoodList() {
    return this.props.products.map((product, index) => {
      return (
        <div className="HomeDietFood">
          <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id.$oid}`}><img src={product.image} alt="food"/></Link>
          <div className="HomeDietFoodFullText">
            <p className="HomeDietFoodFullTextTitle">{product.name}</p>
            <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
          </div>
          <hr />
          <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
        </div>
      );
    })
  }
  render(){
    return (
      <div>
        {this.renderHomeDietFoodList()}
      </div> 
    )
  }
};

export default HomeDietFood;
