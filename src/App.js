import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';

let todos = [
  {
    todoTitle: 'My First Todo',
    todoResponsible: 'Zain',
    todoDescription: 'My First Todo Desc',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My Second Todo',
    todoResponsible: 'Zain Pathan',
    todoDescription: 'My 2nd Todo Desc',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My Imp Todo',
    todoResponsible: 'Zain Pathnan',
    todoDescription: 'My Imp Todo Desc',
    todoPriority: 'high'
  } 
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  handleRemoveTodo(index) {
    console.log('handleRemoveTodo', index);
    this.state.todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  render() {
    return (

      <div className="container">

        <TodoInput></TodoInput>

        <hr/>

        <h4> ToDo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4>
                {todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small>
              </h4>
              <p><span className="glyphicon glyphicon-user"></span>&nbsp;{todo.todoResponsible}</p>

              <p>{todo.todoDescription}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span></button>
            </li>
          )}
        </ul>      
      </div> 
      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/
    );
  }
}

export default App;
