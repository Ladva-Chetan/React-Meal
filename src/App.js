import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./assets/Store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setcartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setcartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
