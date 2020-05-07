// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return props.list.map(input => (
    <Todo task={input.task} key={input.id} id={input.id} toggleItem={props.toggleItem}/>
  ))
}

export default TodoList;