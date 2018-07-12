import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json';

class App extends Component {
  
  // Constructor: Es el primero que se ejecuta de todo el componente. Incluso antes de render.
  constructor(){
    super();
    this.state = {
      todos  // es lo mismo que poner todos: todos
    }
  }

  render() {

    const todos = this.state.todos.map((todo, i) => { 
        return (
        <div className="col-md-4">
          <div className="card mt-4">
             <div className="card-header">
             <h3>{todo.title}</h3>
             <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
             </div>
             <div className="card-body">
             <p>{todo.description}</p>
             <p><mark>{todo.responsible}</mark></p>
             </div>
          </div>
        </div>
        );   
    });

    console.log('Antes de renderizar el componente...')
    return (
      <div className="App">
         <Navigation titulo="Tasks"/>

          <div className="container">
             <div className="row mt-4">
            {todos}
             </div>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;