import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
      type="text"
      value={props.task}
      onChange={props.handleChanges}
      name="task"
      placeholder="...Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm;