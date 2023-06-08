import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="../../imag/10.jpg" alt="" />
            <h2>DOSE</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              expedita impedit atque beatae perferendis velit iusto excepturi
              maiores reiciendis hic.
            </p>
            <h6>We open at 9:00 am</h6>
            <h6>We close at 10:00 pm</h6>
            <button>order now</button>
            <button>learn more</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
