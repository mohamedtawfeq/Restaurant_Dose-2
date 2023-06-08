import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h2>Resturant Dose</h2>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ullam
          nemo nobis corporis dicta dignissimos voluptatem quam, magnam dolorem
        </h6>
        <ul className="social-icon">
          <li>
            <a href="#">
              <ion-icon name="logo-whatsapp">dfdf</ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <p>@2022 مطعم دوز للوجبات السريعة</p>
      </footer>
    </div>
  );
}

export default Footer;
