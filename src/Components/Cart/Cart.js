import { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../assets/Store/cart-context";
import CartItem from "./CartItems";

const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const totalAmount=`$${cartCtx.totalamount.toFixed(2)}`;
  const hasItems=cartCtx.items.length>0;
  const cartItemRemovehandler=id=>{cartCtx.removeItem(id)};
  const cartItemAddhandler=item=>{cartCtx.addItem({...item,amount:1})};

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemovehandler.bind(null,item.id)} onAdd={cartItemAddhandler.bind(null,item)} />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
