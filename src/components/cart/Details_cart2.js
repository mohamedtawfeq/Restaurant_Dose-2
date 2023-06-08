import React from "react";
import Itemcard from "./Itemcart2";
import data from "../Menu/DataCart";

function Details_food() {
  return (
    <div id="main" className="cart ">
      {data.productData.map((item, index) => {
        return (
          <Itemcard
            id={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Details_food;
