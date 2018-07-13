import React, { Component } from 'react';

class TodoForm extends Component{

    constructor(){
        super();
        this.state = {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        // esto es lo mismo que tener: e.target.value , e.target.name
        const {value, name} = e.target;
        this.setState({
           [name]: value // Esto es: El [name] que tiene que actualizar es el value que se le está escribiendo
        });
    }

    handleSubmit(e){
       e.preventDefault();
       console.log(this.state);
       this.props.onAddTodo(this.state);
       console.log('Enviando los datos...');
       console.log('modificación');
    }

    render(){
        return (
            <div className="card">
               <form className="card-body" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <input
                      type="text"
                      name="title"
                      onChange={this.handleInput}
                      className="form-control"
                      placeholder="Title"
                     />
                  </div>
                  <div className="form-group">
                     <input
                      type="text"
                      name="responsible"
                      className="form-control"
                      placeholder="Responsible"
                      onChange={this.handleInput}
                     />
                  </div>
                  <div className="form-group">
                     <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      onChange={this.handleInput}
                     />
                  </div>
                  <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
               </form>
            </div>
        );
    };

}

export default TodoForm;