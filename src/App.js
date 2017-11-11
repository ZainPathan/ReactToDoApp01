import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (

      <div className="container">
        <h4> ToDo Count: <span className="badge">{this.state.todos.length}</span></h4>
      </div>

      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
    );
  }
}

export default App;
