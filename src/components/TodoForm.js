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
    }

    render(){
        return (
            <div className="card">
               <form className="card-body">
                  <div className="form-group">
                     <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Title"
                     />
                  </div>
               </form>
            </div>
        );
    };

}

