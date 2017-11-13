import React, { Component } from 'react';
import './App.css';

class TodoInput extends Component {

    constructor() {
        super();
        this.state = {
            todoTitle: '',
            todoDescription: '',
            todoResponsible: '',
            todoPriority: 'low'
        };
    }

    render() {
        return (
            <div>
                <h4>Add New Todo</h4>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input name="todoTitle" type="text" className="form-control" id="inputTodoTitle" value={this.state.todoTitle} onChange={this.handleInputChange} placeholder="Title" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
                        <div className="col-sm-10">
                            <input name="todoResponsible" type="text" className="form-control" id="inputTodoResponsible" value={this.state.todoResponsible} onChange={this.handleInputChange} placeholder="Responsible" />
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default TodoInput;
