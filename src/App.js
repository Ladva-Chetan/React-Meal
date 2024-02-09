import "./App.css";
import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setcartIsShown(true)
  }

  const hideCartHandler = ()=>{
    setcartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
