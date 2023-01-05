import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  /* Refs allowing us to not assing every letter to the enteredUsername, but whole name after submiting*/
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty value).",
      });

      console.log("username is empty");
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than 0).",
      });
      console.log("Age is incorrect");
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    /*Not recommended to manipulate  dom values using refs, but since we're using refs here its might be considered as solution
     another solutin will be to get back to useState solution to empty the fields after submission *
     Also this approach using refs is called Uncontrolled components (our inputs, bcs react is not involved, we re setting value manually to the dom element)*/
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
