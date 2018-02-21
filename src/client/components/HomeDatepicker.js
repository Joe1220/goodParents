import React, { Component } from 'react';
import Slider from 'react-slick';

class HomeDatepicker extends Component {
  constructor(props) {
    super(props)
    const today = new Date().getDay();
    this.state = {
      clicked: today
    }
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick(e){
    this.setState({ clicked: parseInt(e.currentTarget.dataset.index) });
  }

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
    // 각 날짜 뿌리기
    const result = slider().map(function (item, idx) {
      return (
        <a className={`HomeDatePickerDay ${ upperThis.state.clicked === idx ? "clicked" : "" }`}
           onClick={upperThis.toggleClick}
        >
          <p>{item[0]}</p>
          <h3>{item[1]}</h3>
        </a>
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
