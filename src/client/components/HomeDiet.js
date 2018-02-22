import React from 'react';

import HomeDietDate from './HomeDietDate'
import HomeDietFood from './HomeDietFood'

const HomeDiet = ({products, addToCart, fullDate}) => {
  return(
    <div className="HomeDiet">
      <div className="HomeDietContainer">
        <HomeDietDate fullDate={fullDate}/>
        <HomeDietFood products={products} addToCart={addToCart}/>
      </div>
    </div>
  )
};

export default HomeDiet;
