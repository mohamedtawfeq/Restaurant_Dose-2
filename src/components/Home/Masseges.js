import React, { Component } from "react";
import Slider from "react-slick";
import "../css/massseges.css";
import msge1 from "./msge1.png";
import msge2 from "./msge2.png";
import msge3 from "./msge3.png";

export default class Masseges extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "5px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            centerMode: true,
            infinite: true,
            centerPadding: "5px",
            slidesToShow: 2,
            speed: 500,
          },
        },
      ],
      responsive: [
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 1,
            speed: 500,
          },
        },
      ],
    };
    return (
      <div className="massg">
        <h2>رسائل متابعينا</h2>
        <Slider {...settings}>
          <div className="imgssss">
            <img src={msge1} alt="" />
          </div>
          <div className="imgssss">
            <img src={msge2} alt="" />
          </div>
          <div className="imgssss">
            <img src={msge1} alt="" />
          </div>
          <div className="imgssss">
            <img src={msge3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
