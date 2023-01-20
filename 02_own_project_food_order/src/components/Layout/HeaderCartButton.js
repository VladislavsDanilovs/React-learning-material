import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  /* In this effect function we want to change btnClasses to include bump animation class 
  and then set a timer which removes that class again, so when it's added again in the future, it again plays, therefore 
  I will also import useState (to reevaluate and re-render this component when animation class is added conditionally) */

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    /* Here as a dependancy we cant add cartCtx, bcs this effect would rerun whenever anything
     about cart context changes. Therefore, we'll use array de-structuring, to pull out the items and use them as dependency 
     (so when cart item changes, then trigger this useEffect)*/

    /* Now without setTimeout we have a problem, that affter adding item to the cart, cart bumps animations happens only once.
     The reason for that is that classes are added, but since it's currently never removed thereafter its never changes. Animation plays only
     when class is added for the first time. 
     So we're setting timer which fires after 300 milisec bcs of duration of animation in css file, and after that duration,
     triger a function which will set setBtnIsHighlighted to false. So empty string will be added to class name.   */
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    /*  clean up function. clearTimeout(timer) mean when this effect reruns, we clear the timer.*/
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
