import React, { useState, useContext } from "react";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import "../css/Nave3.css";

function Nave3() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    // Icon Toggler

    toggleIcon === "nav__toggler"
      ? setIcon("nav__toggler toggle")
      : setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/Cart">
        <ion-icon id={"icon"} name="cart-outline"></ion-icon>
        <span className="nomber">0</span>
      </a>
      <div className="leftlink ">
        <a href="/" className="nav__brand">
          DOSE
        </a>
      </div>

      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            الصفحة الرىيسية
            <ion-icon name="home-outline"></ion-icon>
          </a>
        </li>
        <li className="nav__item">
          <a href="/Menu" className="nav__link">
            المنيو
            <ion-icon name="grid-outline"></ion-icon>
          </a>
        </li>
        <li className="nav__item">
          <a
            href="https://maps.app.goo.gl/aJAjCtqJSL5uVQ9p6"
            className="nav__link"
          >
            موقع المطعم
            <ion-icon name="location-outline"></ion-icon>
          </a>
        </li>
        <li className="nav__item">
          <a href="/Cart" className="nav__link">
            المشتريات
            <ion-icon name="pricetags-outline" className={"icon4"}></ion-icon>
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nave3;
