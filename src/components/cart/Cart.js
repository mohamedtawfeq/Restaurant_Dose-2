import React, { useState } from "react";
import "../css/Cart.css";
import Button from "@mui/material/Button";
import Details_Cart from "./Details_cart2";
import Insertinfo from "./Insertinfo";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Insertinfo open={openModal} onClose={() => setOpenModal(false)} />
      <Details_Cart />
      <div className="total">
        <span>المبلغ الكامل</span>
        <span>Rs - 100$</span>
      </div>
      <Button className="order" onClick={() => setOpenModal(true)}>
        ارسال الطلب
      </Button>
    </div>
  );
};
export default Cart;
