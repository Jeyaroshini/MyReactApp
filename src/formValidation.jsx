import React from "react";
class FormValidation extends React.Component {
  constructor() {
    super();
    this.userInput = this.userInput.bind(this);
    this.usernameInput = this.usernameInput.bind(this);
    this.state = { username: "", age: null, errMessage: "", submit: false };
  }
  usernameInput = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  userInput = (event) => {
    let err = "";
    this.setState({
      age: event.target.value,
    });
    if (this.state.age !== "" && !Number(this.state.age)) {
      err = <strong>Invalid Input!!!</strong>;
    }
    this.setState({ errMessage: err });
  };
  handleSubmit = (event) => {
    this.setState({
      submit: true,
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Enter Your Name:{" "}
          <input
            type={this.state.username}
            onChange={this.usernameInput}
          ></input>
          Enter Your Age:{" "}
          <input type={this.state.age} onChange={this.userInput}></input>
          {this.state.errMessage}
          <div>
            <button type="submit">Details</button>
          </div>
        </form>
        Your Name: {this.state.submit && this.state.username}
        <div>Your Age: {this.state.submit && this.state.age}</div>
      </div>
    );
  }
}
export default FormValidation;
