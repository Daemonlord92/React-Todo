import React from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const list = [
  {
    task: 'Build Computer',
    id: 1528817077286,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      list: list,
      task: '',
      id: '',
      completed: ''
    }
  }

  addNewToDoItem = event => {
    event.preventDefault()

    const newToDo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newToDo],
      task: '',
      id: '',
      completed: ''
    })
  }

  handleChanges = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleItem = itemId => {
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      list: this.state.list.filter(input => !input.completed)
    })
  }


  render() {
    return (
      <div>
        <div className="container">
          <h1>ToDo List</h1>
          <TodoList list={this.state.list}
          toggleItem={this.toggleItem} />
          <TodoForm
          addTodo={this.addNewToDoItem}
          handleChanges={this.handleChanges}
          name={this.state.task}
          />
          <button onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
