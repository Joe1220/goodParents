import React, { Component } from 'react';

class HomeDietDate extends Component {
  render(){
    let fullDate = new Date(this.props.fullDate).toString();
    let day = fullDate.slice(0,4);
    let month = fullDate.slice(4,8);
    let date = fullDate.slice(8,10);
    return(
      <div className="HomeDietDate">
        {month}, {date}, {day}
      </div>
    )
  }
};

export default HomeDietDate;