import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  /* `` is a template literals
  `$${}` so that mean first $ is to simply output the character dollar sign and another with
  combination ${} to inject dynamic content into this template literal   */
  const price = `${props.price.toFixed(2)}€`;

  /* Here we're getting validated amount of items from MealItemForm as a parameter */
  /*about props: in MealItemForm  we wrote props.onAddToCart(enteredAmountNumber); that mean
  in MealItem component we can take this passed value and use it in addToCartHandler, bcs of <MealItemForm onAddToCart={addToCartHandler} */

  const addToCartHandler = (amount) => {
    /* calling addItem() method defined in CartProvider.js component*/
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
    console.log(amount + " DEBUG INFO!");
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
