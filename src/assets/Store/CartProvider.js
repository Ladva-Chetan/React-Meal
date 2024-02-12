import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItems=state.items.concat(action.item);
    const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCardHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const CartContext1 = {
    items:cartState.items,
    totalamount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CartContext.Provider value={CartContext1}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;