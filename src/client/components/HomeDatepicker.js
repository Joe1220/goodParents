import React, { Component } from 'react';
import Slider from 'react-slick';

class HomeDatepicker extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  
  render() {
    const settings = {
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 7
    };
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    let data = [];
    const slider = function(){
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate()-currentDate.getDay()+1)
      for(var i = 1; i <= 14; i += 1){
      let newValue = [];
      data[days[currentDate.getDay() - 1]] = currentDate.getDate();
      newValue = [days[currentDate.getDay()], currentDate.getDate()]
      data.push(newValue);
      currentDate.setDate(currentDate.getDate()+1);
      }
      return data;
    }
    const result = slider().map(function(item, index){
      return (
        <div className="HomeDatePickerDay">
          <p>{item[0]}</p>
          <h3>{item[1]}</h3>
        </div>
      )
    })
    return (
      <div className="HomeDatePickerContainer">
      <hr />
        <Slider {...settings}>
          {result}
        </Slider>
        <hr />
      </div>
    );
  }
};

export default HomeDatepicker;