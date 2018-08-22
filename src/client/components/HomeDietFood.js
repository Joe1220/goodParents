import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomeDietFood extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px", display: "inline-block",minWidth: "100%"}}>
          <p style={{ fontWeight: "bold", fontSize: "10", color: "gray" }}>만 2세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }} />
          {this.props.products.slice(0, 4).map((product, index) => {
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} style={{ objectFit: "cover" }} alt="food" /></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "bold", fontSize: "10", color: "gray" }}>만 3세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }} />
          {this.props.products.slice(5, 9).map((product, index) => {
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} style={{ objectFit: "cover" }} alt="food" /></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div> 
            );
          })}
        </div>
        <div style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "bold", fontSize: "10", color: "gray" }}>만 4세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }} />
          {this.props.products.slice(9, 14).map((product, index) => {
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} style={{ objectFit: "cover" }} alt="food" /></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "15px", marginBottom: "20px", padding: "15px", height: "480px" }}>
          <p style={{ fontWeight: "bold", fontSize: "10", color: "gray" }}>만 5세 식단</p>
          <hr style={{ maxWidth: "150px", marginLeft: "0px" }} />
          {this.props.products.slice(15, 20).map((product, index) => {
            return (
              <div className="HomeDietFood" key={index}>
                <Link className="HomeDietFoodImg" to={`/foodDetail/${product._id}`}><img src={product.image} style={{ objectFit: "cover" }} alt="food" /></Link>
                <div className="HomeDietFoodFullText">
                  <p className="HomeDietFoodFullTextTitle">{product.name}</p>
                  <p className="HomeDietFoodFullTextSubtitle">{product.subname}</p>
                </div>
                <hr />
                <p className="HomeDietFoodPrice">{product.price.toLocaleString()} 원</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
};

export default HomeDietFood;
