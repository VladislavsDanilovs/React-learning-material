import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    /*Its always .current for refs created with useRef(); And .value 
    because amountInputRef.currect will point at the input element, which is stored in ref={amountInputRef} 
    and then every input element by default has a value property which holds the currently entered value.
    Also that values is always a string, even if the input type is number.   */
    const enteredAmount = amountInputRef.current.value;
    // Convert String to a Number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    /* Here we're forwanding our amount number, because the cart item which I want to add needs more data, 
    then just entered amount (id, price, name), but here we only have that amount.
    That's why we should not call context method here, just passing that info to MealItem component. */
    props.onAddToCart(enteredAmountNumber);
  };

  /* All bellow mentioned input keys are default props that could be added to any input element
{{}}  means that we dynamicly passing an object
in Input.js file props.label will recieve "Amount"
and props.input.type will recieve "number"*/
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && (
        <p style={"color:red"}> Please enter a valid amount (1-5.)</p>
      )}
    </form>
  );
};

export default MealItemForm;
