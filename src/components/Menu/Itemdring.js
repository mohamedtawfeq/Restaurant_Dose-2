import React, { useContext } from "react";
import "../css/ItemAll.css";

export const Itemcard = (props) => {
  // const { addItem } = useCart();
  return (
    <div id="mian" class=" col-10 col-md-6 col-lg-3 mx-0 md-4 ">
      <div className="card  overflow-hidden h-80 ">
        {/* to clike in img */}
        <img
          className="imgggg"
          src={props.img}
          class="card-img-bottom img-fluid"
          alt=""
        />
        {/* end */}

        <div class="card-body">
          <h3 class="card-title">
            {props.id}-{props.title}
          </h3>
          <h5 class="card-title"> {props.price} IQD</h5>
          <p class="card-text">{props.desc}</p>

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
};

export default Itemcard;
