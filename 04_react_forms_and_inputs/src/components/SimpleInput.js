import { useState } from "react";

/* 
 Two main ways:
 1. Listen on everykeystroke and store that value in state.
 2. useRef to fetch the value once the use is done typing
 
 In reality to handle this, one of the above hooks will be enough
 */

/*       // EMAIL VALIDATION NOT WORKING, DISPLAYING Please enter a valid email. no matter what */

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHanlder = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // detailed when to use this see at lecture 199. time: 3:00.
    // setEnteredName(inputRef.current.value);
    setEnteredNameTouched(true);

    console.log(enteredEmailIsInvalid + " <-INVALID EMAIL");

    if (!enteredNameIsValid) {
      return;
    }
    // reseting field after submission (bad practice):
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    // setEnteredName("");

    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text"> Name must not be empty. </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Name</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHanlder}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputClasses && (
          <p className="error-text"> Please enter a valid email. </p>
        )}
      </div>
      <div>
        <p> {enteredName}</p>
        <p> {enteredEmail}</p>
      </div>
    </form>
  );
};

export default SimpleInput;
