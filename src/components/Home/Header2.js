import React, { Component } from "react";
import data from "../Menu/Data";
import Slider from "react-slick";
import "../css/Header2.css";

export default class Header2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="contaent">
        <h2> العروض </h2>
        <Slider {...settings}>
          {data.dataHome.map((item, index) => {
            return (
              <div id="mian" class=" col-10 col-md-6 col-lg-3 mx-0 md-4 ">
                <div className="card  overflow-hidden h-80 ">
                  {/* to clike in img */}
                  <img
                    className="imgggg"
                    src={item.img}
                    class="card-img-bottom img-fluid"
                    alt=""
                  />
                  {/* end */}

                  <div id="Header" class="card-body">
                    <h3 class="card-title">
                      {item.id}-{item.title}
                    </h3>
                    <h5 class="card-title"> {item.price} IQD</h5>
                    <p class="card-text">{item.desc}</p>

                    {/* button for add food in cart */}
                    <div className="btnp">
                      <button className="btns">
                        <ion-icon
                          className="iconcard"
                          id={"icon"}
                          name="cart-outline"
                        ></ion-icon>
                      </button>
                    </div>
                    {/* end */}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
