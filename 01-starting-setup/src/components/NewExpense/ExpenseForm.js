import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // in this case we will have to update all three states at once instead of separatly doing that
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //Not recommended way there is possobility that you will get incorrect state snapshot
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    /* In this case using  anonymous arrow function is better, because it will be autoamtically executed by React
    and it will RECIEVE the prievious STATE snapshot fot that state for which you're calling. So in return you will pass new statement */
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    /* So here we using TWO WAY BINDING, after user submits form, we want to clear it, thats why
    we are setting values to empty string and after that in form we want to use value=setEnteredTitle, to point to that empty string, to clear input after submit*/

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2021-12-31"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button type="button" onClick={props.onCancel}>
          {" "}
          Cancel{" "}
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
