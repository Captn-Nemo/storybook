import React from "react";
import { Button } from "react-bootstrap";
import "./formButton.css";
export const FormButton = (props) => {
  return (
    <Button
      className="formButton amatic"
      block
      style={{
        borderColor: props.color,
        color: props.color,
        background: "#fff",
      }}
    >
      {props.title}
    </Button>
  );
};
