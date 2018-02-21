import React from 'react';

import HomeDietDate from './HomeDietDate'
import HomeDietFood from './HomeDietFood'

const HomeDiet = ({products, addToCart}) => {
  return(
    <div className="HomeDiet">
      <div className="HomeDietContainer">
        <HomeDietDate />
        <HomeDietFood products={products} addToCart={addToCart}/>
      </div>
    </div>
  )
};

export default HomeDiet;
