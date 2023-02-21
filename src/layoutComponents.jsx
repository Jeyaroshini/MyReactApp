import React from "react"
import styled from "styled-components"
const Container = styled.div `
display:flex; `
const Pane = styled.div `
flex: 1;`
export const LayoutComponents = (
    {
        left: Left,
        right:Right
    }
) => {
    return (
        <Container>
           <Pane>
            <Left>
            </Left>
           </Pane>
           <Pane>
            <Right>
            </Right>
           </Pane>
        </Container>
    )
}



import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LayoutComponents } from "./layoutComponents";
const LefthandComponents = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "pink", borderRadius: "10px" }}>Left</h1>
      <img
        src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
        alt="login"
      />
    </div>
  );
};

const RighthandComponents = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const [confirmPass,setConfirmPass] = useState("")
  const [validate,setValidate] = useState("")
  const handleName = (event)  => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value)
    if(password.length >10)
    {
        setError(<strong>Password is too lengthy</strong>)
    }
    else if(password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
    {
        setError(<strong>Strong Password</strong>)
    }
    else
    {
        setError(<strong>Weak Password</strong>)
    }
  }
  const confirmPassword = (event) =>
  {
    setConfirmPass(event.target.value)
    if(password === confirmPass)
    {
      setValidate(<strong>Password Matches</strong>)
    }
    else
    {
      setValidate(<strong>Mismatch Password</strong>)
    }
  }
  return (
    <div>
      <h1 style={{ backgroundColor: "lightblue", borderRadius: "10px" }}>
        Right
      </h1>
      <form>
        <label>Username</label>
        <input type="text" value={name} onChange={handleName}></input>
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          onChange={handlePassword}
        ></input>{error}
        <br />
        <label>Confirm Password</label>
        <input type="password" onChange={confirmPassword}></input>{validate}<br />
        <button>Login</button>
      </form>
    </div>
  );
};
ReactDOM.render(
  <LayoutComponents left={LefthandComponents} right={RighthandComponents} />,
  document.getElementById("root")
);
