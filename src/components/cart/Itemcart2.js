import React from "react";
import "../css/Itemcart.css";
import Button from "@mui/material/Button";
export const Itemcard = (props) => {
  return (
    <article>
      {/* {cart.map((item) => ( */}
      <div className="cart_box">
        <div className="cart_img">
          <img src={props.img} alt="" />
          <p>{props.title}</p>
        </div>
        <div className="button">
          <button className="add">+</button>
          <button className="number">5</button>
          <button className="remove">-</button>
        </div>
        <div className="button-remove">
          <span>{props.price}</span>
          <button
          //  onClick={() => handleRemove(item.id)}
          >
            حذف
          </button>
        </div>
      </div>
      {/* ))} */}
    </article>
  );
};

export default Itemcard;
