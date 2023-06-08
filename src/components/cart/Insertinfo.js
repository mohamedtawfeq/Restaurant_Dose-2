import React from "react";
import "../css/Insertinfo.css";
import Button from "@mui/material/Button";

const img = "../Home/imag-menu/2.png";
function insertinfo({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="info"
        //على كل جميع العناصر close   هذه الفكشن لعدم استخدام فكشن ال
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="form">
          <button className="btnss" onClick={onClose}>
            X
          </button>
          <h2>قم بادخال المعلومات</h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>العنوان</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="text" required="required" />
            <span>اقرب نقطة دالة</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="text" required="required" />
            <span>ملاحظة للطلب</span>
            <i></i>
          </div>
          <div className="btnopder">
            <Button className="order2">ارسال</Button>
            <span>
              مشاركة الموقع
              <ion-icon name="location-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default insertinfo;
