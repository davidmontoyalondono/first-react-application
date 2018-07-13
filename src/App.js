import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
  
  // Constructor: Es el primero que se ejecuta de todo el componente. Incluso antes de render.
  constructor(){
    super();
    this.state = {
      todos  // es lo mismo que poner todos: todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
      this.setState({
         todos: [...this.state.todos, todo] // tomo el arreglo todos y le agrego un nuevo todo
      });
  }

  removeTodo(index){
    // console.log(index); // devuelve el índice de la tarea
    if(window.confirm('Estás seguro de que quieres eliminar este elemento ?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index; // filtra el arreglo todos. Recorre todo el arreglo y retorna solo los elementos que no son iguales al index(índice) que se le pasó como parámetro
         })
      });
    }
  }

  render() {

    const todos = this.state.todos.map((todo, i) => { 
        return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
             <div className="card-header">
             <h3>{todo.title}</h3>
             <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
             </div>
             <div className="card-body">
             <p>{todo.description}</p>
             <p><mark>{todo.responsible}</mark></p>
             </div>
             <div className="card-footer">
               <button 
               className="btn btn-danger"
               onClick={this.removeTodo.bind(this, i)}
               >
               Delete
               </button>
             </div>
          </div>
        </div>
        );   
    });

    return (
      <div className="App">
         <Navigation titulo="Tasks"/>

          <div className="container">
             <div className="row mt-4">

             <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}/>
             </div>

                  <div className="col-md-8">
                  <div className="row">
                   {todos}
                 </div>
                 </div>
                 
             </div>
          </div>
       
      </div>
    );
  }
}

export default App;