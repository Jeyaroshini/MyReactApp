import React from "react";
class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      confirm: false,
      age: null,
      submit: false,
      register: false,
      email: "",
      gender: "Male",
      college: "",
      stream: "B.E(CSE)",
      errMessage: "",
      status: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleCollege = this.handleCollege.bind(this);
    this.handleStream = this.handleStream.bind(this);
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
    if(this.state.name !== "")
    {
      const message = <strong>Please Choose a username</strong>
      this.setState({
        errMessage: message,
        status: true
      })
    }
    event.preventDefault();
  };
  handleAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    if (this.state.age <= 0) {
      const err = <strong>Invalid Input !!</strong>;
      this.setState({
        status: true,
        errMessage: err,
      });
    }
    event.preventDefault();
  };
  handleSubmit = (event) => {
    this.setState({
      submit: true,
    });
    event.preventDefault();
  };
  handleRegistration = (event) => {
    this.setState({
      register: true,
    });
    event.preventDefault();
  };
  handleConfirmation = (event) => {
    this.setState({
      confirm: true,
    });
    event.preventDefault();
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
    event.preventDefault();
  };
  handleGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
    event.preventDefault();
  };
  handleCollege = (event) => {
    this.setState({
      college: event.target.value,
    });
    event.preventDefault();
  };
  handleStream = (event) => {
    this.setState({
      stream: event.target.value,
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleRegistration}>Registration</button>
        {this.state.register && (
          <form>
            Username: <input type="text" onChange={this.handleName} required></input>
            {this.state.status && this.state.errMessage}
            <br />
            Age: <input type="number" onChange={this.handleAge} required></input>
            {this.state.status && this.state.errMessage}
            <br />
            Email: <input type="email" onChange={this.handleEmail} required></input>
            <br />
            Gender:
            <br />{" "}
            <select value={this.state.gender} onChange={this.handleGender} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br />
            <h3>Education</h3>
            College Name:{" "}
            <input
              value={this.state.college}
              onChange={this.handleCollege}
            required></input>
            <br />
            Stream:{" "}
            <select value={this.state.stream} onChange={this.handleStream} required>
              <option value="B.E(CSE)">B.E(CSE)</option>
              <option value="B.Tech(IT)">B.Tech(IT)</option>
              <option value="B.E(ECE)">B.E(ECE)</option>
              <option value="B.E(EEE)">B.E(EEE)</option>
              <option value="B.E(Civil)">B.E(Civil)</option>
            </select>
          </form>
        )}

        <button onClick={this.handleSubmit}>Submit</button>
        <br />
        {this.state.submit && (
          <dialog open>
            Are You sure to Submit?
            <button onClick={this.handleConfirmation}>Yes</button>
            <button>No</button>
          </dialog>
        )}
        {this.state.confirm && (
          <p>
            Name is: {this.state.name} <br />
            Age is: {this.state.age}
            <br />
            E-mail: {this.state.email}
            <br />
            Gender: {this.state.gender} <br />
            College: {this.state.college} <br />
            Stream: {this.state.stream} <br />
            <b>Submitted Sucessfully!!!</b>
          </p>
        )}
      </div>
    );
  }
}
export default Registration;
