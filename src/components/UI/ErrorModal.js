import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

//Modal function to display Error message with overlay
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirmError}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirmError}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
