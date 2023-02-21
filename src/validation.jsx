import React from "react";
class Validation extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      submit: false,
    };
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.validate = this.validate.bind(this);
  }
  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    event.preventDefault();
  };
  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    event.preventDefault();
  };
  validate = (event) => {
    if (this.state.username === "Admin" && this.state.password === "Admin") {
      const message = <strong>Welcome Admin</strong>;
      this.setState({
        submit: true,
        message: message,
      });
    } else if (this.state.username === "" || this.state.password === "") {
      const message = <strong>Enter Valid Username or Password!!!</strong>;
      this.setState({
        submit: true,
        message: message,
      });
    } else {
      const message = <strong>Welcome {this.state.username}</strong>;
      this.setState({
        submit: true,
        message: message,
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          Username:
          <input
            value={this.state.username}
            onChange={this.setUsername}
          ></input>
          password:
          <input
            value={this.state.password}
            onChange={this.setPassword}
          ></input>
          <button onClick={this.validate}>validate</button>
          <div>{this.state.submit && this.state.message}</div>
        </form>
      </div>
    );
  }
}
export default Validation;
