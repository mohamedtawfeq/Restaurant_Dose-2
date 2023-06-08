import React from "react";
import Itemcard from "./Itemfood.js";
import data from "./Data";

function Details_food() {
  return (
    <div id="main" className="justify-content-center ">
      <section className="py-1 container">
        <div className="row justify-content-center">
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
      </section>
    </div>
  );
}

export default Details_food;

// ********************************************************************************
// ********************************************************************************
