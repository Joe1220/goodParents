import React from 'react';

class CartDate extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date(),
      myDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      myDate: myDate
    };
  }



  render() {
    return (
      <p>{this.state.myDate}</p>
    );
  }
}

export default CartDate;
