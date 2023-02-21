import React from "react";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "C Language",
      fixedAmount: [2000],
      submit: false,
      defaultDuration: "3",
      name: "",
      empty: [],
      valueList: [],
      status: false,
      message: "",
      nameEdit: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registration = this.registration.bind(this);
    this.handleName = this.handleName.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.viewStatus = this.viewStatus.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.handleNameEdit = this.handleNameEdit.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    this.setState({ submit: true });
    event.preventDefault();
  };
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  registration = (event) => {
    if (this.state.name !== "") {
      const empty = [...this.state.empty];
      const valueList = [...this.state.valueList];
      empty.push(this.state.name);
      valueList.push(this.state.value);
      this.setState({
        submit: true,
        empty: empty,
        name: "",
        value: "",
        valueList: valueList,
        id: Math.random(),
      });
    }
    console.log("id", this.state.id);
    event.preventDefault();
  };
  deleteItem(key, event) {
    console.log("id", this.state.id);
    const empty = [...this.state.empty];
    const valueList = [...this.state.empty];
    const emptyList = empty.filter((item) => item.id !== key);
    const value = valueList.filter((item) => item.id !== key);
    this.setState({
      empty: emptyList,
      valueList: value,
    });
    event.preventDefault();
  }
  viewStatus = (event) => {
    if (this.state.empty !== "" && this.state.valueList !== "") {
      this.setState({ status: true });
      const message = <strong>Completed :)</strong>;
      this.setState({ message: message });
    } else {
      const message = <strong>Incomplete :(</strong>;
      this.setState({ message: message });
    }
    event.preventDefault();
  };
  handleNameEdit = (event) => {
    this.setState({
      nameEdit: event.target.value,
    });
  };
  setUpdate = (event) => {
    this.setState({
      empty: this.state.nameEdit,
      submit: true,
    });
    console.log("name: ", this.state.empty);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Welcome to Online Course Reservation System</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Username:
            <input type={this.state.name} onChange={this.handleName}></input>
            <div></div>
          </div>
          <label>Pick a Course:</label>
          <select value={this.state.value} onChange={this.handleInput}>
            <option value="C Language">C Language</option>
            <option value="Python">Python</option>
            <option value="JAVA">Java</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <button type="Submit">Submit</button>
          <div>
            <button onClick={this.registration}>Register</button>
          </div>
        </form>
        Course You Picked is: {this.state.submit && this.state.value}
        <div>
          Total Amount:
          {this.state.submit && this.state.fixedAmount}
          <div>
            Duration:
            {this.state.submit && this.state.defaultDuration} hours
            <div>
              <table>
                <th>Username</th>
                <th>Course</th>
                <tbody>
                  <tr>
                    <td>
                      {this.state.empty.map((item) => {
                        return <div>{item}</div>;
                      })}
                    </td>
                    <td>
                      {this.state.valueList.map((item) => {
                        return (
                          <div>
                            {item}
                            <button onClick={() => this.deleteItem(item.id)}>
                              Delete
                            </button>
                            <button onClick={this.viewStatus}>
                              View Status
                            </button>
                            {this.state.status && this.state.message}
                            
                          </div>
                        );
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forms;
