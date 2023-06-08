import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../src/components/css/App.css";
import Home2 from "./components/Home/Home2";
import Nave3 from "./components/Nave/Nave3";
import Menu from "./components/Menu/Menu";
import Cart from "./components/cart/Cart";
import Header2 from "./components/Home/Header2";
import data from "./components/Menu/Data";
import Routes from "./components/cart/Routes";
import Footer from "./components/Home/Footer";
import Name from "./components/Home/Name";
import Imgs from "./components/Home/Imgs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Masseges from "./components/Home/Masseges";

function App() {
  // const { productItems } = data.productData;
  // const [cartItems, setCartItems] = useState([]);

  // const handleAddProduct = (product) => {
  //   const ProductExist = cartItems.find((item) => item.id === product.id);
  //   if (ProductExist) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id
  //           ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  return (
    <div className="App">
      <Nave3 />
      <Switch>
        <Route path="/" exact>
          <Home2 />
          <Name />
          <Header2 />
          <Imgs />
          <Masseges />
          <Footer />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
