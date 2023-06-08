import React from "react";
import "../css/Name.css";
import img1 from "./logo222.png";

function Name() {
  return (
    <div className="all">
      <div className="name">
        <div className="h55">
          <h5>حي نركال / مقابيل اعدادية الصناعة</h5>
        </div>
        <div className="box">
          <div className="content">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="h55">
          <h5>
            <h5>(12pm - 12am) اوقات العمل</h5>
            <h5>(3pm - 12am) يوم الجمعة </h5>
          </h5>
        </div>
      </div>
      <div className="span">
        <h3>
          <span>D</span>
          <span>O</span>
          <span>S</span>
          <span>E</span>
        </h3>
      </div>
    </div>
  );
}

export default Name;
