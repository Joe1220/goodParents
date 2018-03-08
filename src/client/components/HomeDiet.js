import React from 'react';

import HomeDietDate from './HomeDietDate'
import HomeDietFood from './HomeDietFood'

const HomeDiet = (props) => {
  return(
    <div className="HomeDiet">
      <HomeDietDate fullDate={props.fullDate}/>
      <HomeDietFood {...props} />
    </div>
  )
};

export default HomeDiet;
