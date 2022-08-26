import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsBumped, setBtnIsBumped] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numOfCartItems = items.reduce((curNumberAcc, item) => {
    return curNumberAcc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump: ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    };
    setBtnIsBumped(true);

    const timer = setTimeout(() => {
      setBtnIsBumped(false)
    }, 300);

    // cleanup func
    return () => {
      clearTimeout(timer);
    }
  }, [items]); // Cart button is bumped when items in cart change

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
