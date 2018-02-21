import React, { Component } from 'react';
import Slider from 'react-slick';

class HomeDatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // hover: false
    }
    // this.toggleHover = this.toggleHover.bind(this);
  }
  // toggleHover() {
  //   this.setState({ hover: !this.state.hover })
  // }

  // style() {
  //   if (this.state.hover) {
  //     return { color: "rgb(25, 25, 221)" }
  //   } else {
  //     return { color: "black" }
  //   }
  // }

  render() {
    const upperThis = this;
    // react-slick 옵션
    const settings = {
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 7
    };
    // 날짜 배열 뽑아내는 로직
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    let data = [];
    const slider = function () {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
      for (var i = 1; i <= 14; i += 1) {
        let newValue = [];
        newValue = [days[currentDate.getDay()], currentDate.getDate()]
        data.push(newValue);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return data;
    }
    // 날짜 별 뿌리기
    const result = slider().map(function (item) {
      return (
        <div className="HomeDatePickerDay"
          // onMouseOver={upperThis.toggleHover}
          // onMouseOut={upperThis.toggleHover}
        >
          <p /*style={upperThis.style()}*/>{item[0]}</p>
          <h3 /*tyle={upperThis.style()}*/>{item[1]}</h3>
        </div>
      )
    })
    return (
      <div className="HomeDatePickerContainer">
        <hr className="HomeDatePickerHr_1" />
        <Slider {...settings} >
          {result}
        </Slider>
        <hr className="HomeDatePickerHr_2"/>
      </div>
    );
  }
};

export default HomeDatepicker;