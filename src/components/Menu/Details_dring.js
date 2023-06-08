import React from "react";
import Itemdring from "./Itemdring";
import data from "./Data";

function Details_dring() {
  return (
    <div id="main" className="justify-content-center ">
      <section className="py-1 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemdring
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

export default Details_dring;

// ********************************************************************************
// ********************************************************************************
