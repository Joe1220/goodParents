import React from 'react';

import HomeDietDate from './HomeDietDate'
import HomeDietFood from './HomeDietFood'

const HomeDiet = () => {
  return(
    <div className="HomeDiet">
      <div className="HomeDietContainer">
        <HomeDietDate />
        <HomeDietFood />
      </div>
    </div>
  )
};

export default HomeDiet;