import classes from "./Input.module.css";
import React from "react";

/* Here we are using React.forwardRef to make our custom component Input be available for ref property,
after that as second parameter, we're writing ref, that can be set through the ref prop on our component
 and we can also now use it inside of our component function to forward that ref to input here.
 So that basacilly means, that in our MealItemForm component, we're setting to our Input component ref={amountInputRef} after that 
 it's forwarded here and input recieves that values. So with that now we can get access to the input throw refs 
 and that allows us to read that entered value in our submitHandlerFunction at MealItemForm component.
 


 {...props.input} using spread operator is shortend version of writing down all input object properties, like props.input.id and etc.
 */

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label} </label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
