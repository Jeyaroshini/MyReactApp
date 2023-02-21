import React from "react";
class DialogOperation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      names: [],
      submit: false,
      newValue: "",
      updateName: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addName = this.addName.bind(this);
    this.setNewValue = this.setNewValue.bind(this);
    this.setSubmit = this.setSubmit.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    event.preventDefault();
  };
  deleteItem = (event) => {
    this.setState({
      submit: true,
    });
    event.preventDefault();
  };
  handleDelete = (event) => {
    this.setState({
      submit: false,
    });
    event.preventDefault();
  };
  addName = (event) => {
    const names = [...this.state.names];
    names.push(this.state.name);
    this.setState({
      names: names,
      name: "",
    });
    event.preventDefault();
  };
  updateItem = (event) => {
    this.setState({
      updateName: true,
    });
    event.preventDefault();
  };
  setNewValue = (event) => {
    this.setState({
      newValue: event.target.value,
    });
    event.preventDefault();
  };
  setSubmit = (event) => {
    const names = [...this.state.names];
    names.replace(this.state.name, this.state.newValue);
    alert("hello");
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <button onClick={this.deleteItem}>Delete</button>
        {this.state.submit && (
          <dialog open>
            <h1>Hello Roshini</h1>
            <button onClick={this.handleDelete}>Close</button>
          </dialog>
        )}
        <div>
          <form>
            Username:{" "}
            <input type={this.state.name} onChange={this.handleInput}></input>
            <button onClick={this.addName}>Add</button>
            {this.state.names.map((item) => {
              return (
                <div>
                  {item}
                  <button onClick={this.updateItem}>Update</button>
                  {this.state.updateName && (
                    <form>
                      Enter the new Value:{" "}
                      <input
                        type={this.state.newValue}
                        onChange={this.setNewValue}
                      ></input>
                      <button onClick={this.setSubmit}>Submit</button>
                    </form>
                  )}
                </div>
              );
            })}
          </form>
        </div>
      </div>
    );
  }
}
export default DialogOperation;
