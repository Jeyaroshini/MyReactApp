import React from "react";
const Button = (props) => {
  const btn = {
    width: "100px",
    border: "2px solid black",
    backgroundColor: "pink",
    padding: "10px",
    color: "black",
    fontWeight: "bolder",
    fontSize: "16px",
  };
  return (
    <input
      type="button"
      value={props.label}
      onClick={props.handleClick}
      style={btn}
    />
  );
};
export default Button;
