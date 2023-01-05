import React, { useState } from "react";
import styles from "./UserForm.module.css";
import ModalComponent from "./ModalComponent";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random(),
      userName: enteredUserName,
      age: enteredAge,
    };

    console.log(enteredAge);
    console.log(enteredUserName);
    props.onSaveUserData(userData);
    if (+enteredAge < 0) {
      setShowErrorModal({
        title: "Invalid age",
        message: "Please enter a valid age (greater than 0).",
      });
      console.log(showErrorModal + " debug info");
      return;
    }
    if (enteredUserName.trim().length === 0) {
      setShowErrorModal({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty value).",
      });
      console.log(showErrorModal + " debug info");
      return;
    }
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {showErrorModal && (
        <ModalComponent
          title={showErrorModal.title}
          message={showErrorModal.message}
          onClose={closeErrorModal}
        />
      )}
      <div className={styles["form-control"]}>
        <label> Username </label>
        <input onChange={usernameHandler} type="text" />
      </div>
      <div className={styles["form-control"]}>
        <label> Age </label>
        <input onChange={ageHandler} type="text" />
      </div>

      <div className={styles["form-control__actions"]}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
