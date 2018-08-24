import React, { Component } from "react";
import Slider from "react-slick";

class HomeDatepicker extends Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(e) {
    this.props.onDayDayChange(parseInt(e.currentTarget.dataset.index, 10));
    this.passProps(e);
  }
  passProps(e) {
    this.props.onChangeDate(e.currentTarget);
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
    const slider = function() {
      let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
      let data = [];
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - currentDate.getDay());
      for (var i = 0; i < 14; i++) {
        let newValue = [];
        newValue = [
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          currentDate.getDay(),
          days[currentDate.getDay()]
        ];
        data.push(newValue);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return data;
    };

    // 각 날짜 뿌리기
    const result = slider().map(function(item, idx) {
      return (
        <a
          className={`HomeDatePickerDay ${
            upperThis.props.clicked === idx ? "clicked" : ""
          }`}
          onClick={upperThis.toggleClick}
          year={item[0]}
          month={item[1]}
          date={item[2]}
          day={item[3]}
          key={idx}
        >
          <p>{item[4]}</p>
          <h3>{item[2]}</h3>
        </a>
      );
    });
    return (
      <div className="HomeDatePickerContainer">
        <hr className="HomeDatePickerHr_1" />
        <Slider {...settings}>{result}</Slider>
        <hr className="HomeDatePickerHr_2" />
      </div>
    );
  }
}

export default HomeDatepicker;
