import React from "react";
class AddTask extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.state = {
      task: '',
      status:false,
      submitValue: [],
      id:Math.random()
    };
  }
  handleInput = (event) => {
    this.setState({
      task: event.target.value,
    });
  };
  addItem = (event) => {
    if (this.state.task !== "") {
        const submitValue=[...this.state.submitValue];
        submitValue.push(this.state.task)
        this.setState({status:true, submitValue:submitValue, task:''})
        console.log(this.state.submitValue)
    }
    event.preventDefault();
  };
  deleteItem = (event) =>
  {
    const submitValue = [...this.state.submitValue]
   const deleteList = submitValue.filter(this.state.task !== this.state.id)
    this.setState({submitValue:deleteList,task:''})
    event.preventDefault()
  }
  render() {
    return (
      <div>
        Enter the task:
        <input value={this.state.task} onChange={this.handleInput}></input>
        <button onClick={this.addItem}>Add Task</button>
        <table>
          <th>task</th>
          <tbody>
        <div>
        { this.state.submitValue.map(item=>{ 
            return (<div> {item}
            <button onClick={this.deleteItem}>Delete</button>
                </div>)
        })}
        </div>
        </tbody>
        </table>
      </div>
    );
  }
}
export default AddTask;
