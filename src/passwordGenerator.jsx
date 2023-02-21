import React from "react";
class PasswordGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordLength: 0,
      numbers: "0123456789",
      symbols: "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      setNumbers: false,
      setSymbols: false,
      setUppercase: false,
      setLowerCase: false,
      password: "",
    };
    this.handleLength = this.handleLength.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleSymbols = this.handleSymbols.bind(this);
    this.handleLowerCase = this.handleLowerCase.bind(this);
    this.handleUpperCase = this.handleUpperCase.bind(this);
    this.createPassword = this.createPassword.bind(this);
  }
  handleLength = (event) => {
    this.setState({
      passwordLength: event.target.value,
    });
    event.preventDefault();
  };
  handleNumbers = (event) => {
    this.setState({
      setNumbers: true,
    });
    event.preventDefault();
  };
  handleSymbols = (event) => {
    this.setState({
      setSymbols: true,
    });
    event.preventDefault();
  };
  handleLowerCase = (event) => {
    this.setState({
      setLowerCase: true,
    });
    event.preventDefault();
  };
  handleUpperCase = (event) => {
    this.setState({
      setUppercase: true,
    });
    event.preventDefault();
  };
  generatePassword = () => {
    if (
      !this.state.setNumbers &&
      !this.state.setSymbols &&
      !this.state.setLowerCase &&
      !this.state.setUppercase
    ) {
      alert("Please Choose any one of the Option");
    } else {
      var password = "";
      if (this.state.setNumbers) {
        password = password + this.state.numbers;
      }
      if (this.state.setSymbols) {
        password = password + this.state.symbols;
      }
      if (this.state.setLowerCase) {
        password = password + this.state.lowerCase;
      }
      if (this.state.setUppercase) {
        password = password + this.state.upperCase;
      }
    }
    this.setState({
      password: this.createPassword(password),
    });
  };
  createPassword = (password) => {
    var passwords = "";
    var passwordLen = password.length;
    for (var i = 0; i < this.state.passwordLength; i++) {
      const passwordIndex = Math.round(Math.random() * passwordLen);
      passwords = passwords + password.charAt(passwordIndex);
    }
    return passwords;
  };
  render() {
    return (
      <div>
        <h1>Password Generator</h1>
        <br />
        <form>
          Password Length: <input onChange={this.handleLength}></input>
          <br />
          <input type="checkbox" onChange={this.handleNumbers}></input>Numbers
          <br />
          <input type="checkbox" onChange={this.handleSymbols}></input>Symbols
          <br />
          <input type="checkbox" onChange={this.handleUpperCase}></input>
          UpperCase
          <br />
          <input type="checkbox" onChange={this.handleLowerCase}></input>
          LowerCase
          <br />
        </form>
        <button onClick={this.generatePassword}>Generate Password</button>
        <h4>{this.state.password}</h4>
      </div>
    );
  }
}
export default PasswordGenerator;
