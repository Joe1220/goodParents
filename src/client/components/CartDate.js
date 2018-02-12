import React from 'react';

class CartDate extends React.Component {
  constructor(props) {
    super(props);

    var today = new Date(),
<<<<<<< HEAD
    myDate = `${(today.getMonth() + 1)}월 ${today.getDate()}일`;
=======
      myDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
>>>>>>> 9b7113276835279fff218782ebf6835be39d849e

    this.state = {
      myDate: myDate
    };
  }

<<<<<<< HEAD
  render() {
    return (
      <p className="font-weight-bold">오늘, {this.state.myDate}</p>
=======


  render() {
    return (
      <p>{this.state.myDate}</p>
>>>>>>> 9b7113276835279fff218782ebf6835be39d849e
    );
  }
}

export default CartDate;
