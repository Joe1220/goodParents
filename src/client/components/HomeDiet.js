import React from 'react';

import HomeDietDate from './HomeDietDate'
import HomeDietFood from './HomeDietFood'

const HomeDiet = ({products, addToCart, fullDate}) => {
  return(
    <div className="HomeDiet">
      <HomeDietDate fullDate={fullDate}/>
      <HomeDietFood products={products} addToCart={addToCart}/>
    </div>
  )
};

export default HomeDiet;
