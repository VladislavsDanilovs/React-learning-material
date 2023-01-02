import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// Assignment: Time to Practice: React & Component Basics
/*Complete the instructions mentioned in the above video.
In detail:
    Create a new component that is responsible for displaying expenses
    Add multiple ExpenseItem components in that component
    Keep the expenses data in the App component and pass that data into the newly created component
You can use this .css file for some styling for your Expenses 
*/

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (dateValue) => {
    setFilteredYear(dateValue);
    console.log(dateValue);

    // const date = dateValue;
    // for (let i = 0; i < props.expenses.length - 1; i++) {
    //   const dateTime = new Date(props.expenses[i].date);
    //   const year = dateTime.getFullYear();
    //   const yearString = year.toString();

    //   if (yearString != date) {
    //     console.log(date + " for this year there are no purchases made!");
    //     continue;
    //   }
    //   if (yearString == date) {
    //     console.log(props.expenses[i].date);
    //     break;
    //   }
    // }
  };

  const filterExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // created ExpensesFilter component uses two way binding, from parent to child,
  // and from child to parent so officialy its called controlled component (value are handled not in the expenses filter but in parent component)

  // ABOUT MAP(): using index as a second parameter is not recommended because their may
  //occur some bugs, // better to use id that already is forseened for this object (from db)

  // {} in JSX means we're using dynamic expression, in this case we're not allowed to use if, for and another statements, but
  // we can use ternary operators or && operator it will work as ?

  // We CAN store JSX content in variable. Mostly its a cleanest way, but of course you can choose prefered way.

  // let expensesContent = <p> No expenses found.</p>;

  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       titleE={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList expenses={filterExpenses} />

      {/* <ExpenseItem
        titleE={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        titleE={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        titleE={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        titleE={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
