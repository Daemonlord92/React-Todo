import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.toggleItem(props.id)}>
      <li>{props.task}</li>
    </div>
  )
}

export default Todo;