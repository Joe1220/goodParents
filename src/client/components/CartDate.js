import React from 'react';

const CartDate = () => {
  const showCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return [date, month, year];
  }
  return (
    <div>
      {this.showCurrentDate.map(val => {
        return (
          <p>val</p>
        )
      })}
    </div>
  )
}

export default CartDate;
