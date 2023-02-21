import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
function Update() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  const [editInput, setEditInput] = useState(null);
  const [editTask, setEditTask] = useState("");
  const [status,setStatus] = useState(false)
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random(),
      text: input,
    };
    setInputs([...inputs].concat(newItem));
    setInput("");
  };
  const deleteItems = (event) =>
  {
    setStatus(true)
    event.preventDefault()
  }
  const handleExit = (event) =>
  {
    setStatus(false)
    event.preventDefault()
  }
  const deleteItem = (id) => {
    let deleteItem = [...inputs].filter((item) => item.id !== id);
    setInputs(deleteItem);
  };
  const submitEdit = (id) => {
    const newItem = [...inputs].map((item) => {
      if (item.id === id) {
        item.task = editTask;
      }
      return item;
    });
    setInputs(newItem);
    setEditInput(null);
  };
  return (
    <div>
      <h1>CRUD Operation</h1>
      <form>
        Enter Task: <input value={input} onChange={handleInput}></input>
        <button onClick={addItem}>Add Task</button>
        {inputs.map((item) => {
          return (
            <div>
              {item.id === editInput ? (
                <input onChange={(event) => setEditTask(event.target.value)}
                ></input>
              ) : (
                <div>{item.text}</div>
              )}
              <div>
              {item.id === editInput ? (
                <button onClick={() => submitEdit(item.id)}>Submit</button>
              ) : (
                <button onClick={(event) => setEditInput(item.id,event.preventDefault())}>Edit</button>
              )}
              <button onClick={deleteItems}>Delete</button>
              {status &&( <Dialog>
                <p>Are You sure to Delete?</p>
              <button onClick={() => deleteItem(item.id)}>Yes</button>
              <button onClick={handleExit}>No</button></Dialog>)}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
}
export default Update;
