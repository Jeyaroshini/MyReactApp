import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const status = e =>
  {
    alert("completed")
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <FontAwesomeIcon icon='check'className='edit-icon' onClick={() =>status()}></FontAwesomeIcon>
        <FontAwesomeIcon icon='trash'
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon='edit'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        ></FontAwesomeIcon>
      </div>
    </div>
  ));
};

export default Todo;