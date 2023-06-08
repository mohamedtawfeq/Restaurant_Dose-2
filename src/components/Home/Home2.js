import img3 from "./imag Slider/3.jpg";
import img4 from "./imag Slider/4.jpg";
import img6 from "./imag Slider/6.jpg";
import img7 from "./imag Slider/111.jpg";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Home2.css";

function Home2() {
  return (
    <Carousel fade className="Carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="First slide" />
        <Carousel.Caption>
          <h3>خليك سترونك</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Second slide" />

        <Carousel.Caption>
          <h3>طعم غير شكل</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />

        <Carousel.Caption>
          <h3>بركر دوز بك</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home2;
