import React, { Component } from 'react';

class HomeDatepicker extends Component {
  render(){
    return (
      <div className="datepicker">
        <i class="material-icons md-36 left" >keyboard_arrow_left</i>
        <i class="material-icons md-36 right">keyboard_arrow_right</i>
          <table align="center">
            <tr id="day">
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
            <tr id="date">
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
            </tr>
          </table>
        <hr />
      </div>
    )
  }
};

export default HomeDatepicker;