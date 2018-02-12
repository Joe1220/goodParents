import React from 'react';

class CartDate extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date(),
    myDate = `${(today.getMonth() + 1)}월 ${today.getDate()}일`;

    this.state = {
      myDate: myDate
    };
  }

  render() {
    return (
      <p className="font-weight-bold">오늘, {this.state.myDate}</p>
    );
  }
}

export default CartDate;
