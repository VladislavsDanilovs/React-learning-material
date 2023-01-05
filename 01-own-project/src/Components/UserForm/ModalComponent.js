import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./ModalComponent.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose}>
        <Card className={classes["modal-component"]}>
          <header className={classes.header}>
            <h2> {props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onClose}>Close</button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
