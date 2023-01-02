import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpensesItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  // array destructuring (to store both elements in separate variables or constants)
  // const [title, setTitle] = useState(props.titleE);

  // const clickHandler = () => {
  //   setTitle("Hello world");
  // };

  /* we pass a pointer clickHandler without (), because if we will pass it
      with () it will be executed to early and will not executed on click*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.titleE} </h2>
          <div className="expense-item__price">{props.amount}€</div>
        </div>
        {/* <button onClick={clickHandler}>Change button</button> */}
      </Card>{" "}
    </li>
  );
};

export default ExpenseItem;
