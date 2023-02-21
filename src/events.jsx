import React from "react";
class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      task: " ",
      list: [],
    };
  }
  handleInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  addItem = (event) => {
    if (this.state.task !== "") {
      const newItem = {
        id: Math.random(),
        task: this.state.task,
      };
      this.state.list.push(newItem);
      console.log(newItem);
    }

    event.preventDefault();
  };

  deleteItem = (event) =>
  {
    for(let i=0;i<5;i++)
    {
      if(this.state.list.task[i] === this.state.list.id[i])
      {
          delete this.state.list.newItem[i]
      }
    }
  }
  render() {
    return (
      <div>
        Enter the task:
        <input value={this.state.task} onChange={this.handleInput}></input>
        <button onClick={this.addItem}>Add Task</button>
        <button onClick={this.deleteItem}>delete</button>
      </div>
    );
  }
}
export default Event;
