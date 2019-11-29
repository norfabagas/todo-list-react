import React, { Component } from 'react';

class AddTask extends Component {
    render() { 
        return (
            <div
                className="form-group inline form-inline"
            >
                <input
                    type="text" 
                    className="form-control col-md-10"
                    onChange={this.props.onInput}
                    value={this.props.inputValue}
                />
                <button
                    className="btn btn-md btn-primary col-md-2"
                    onClick={this.props.onSubmitTask}
                >
                    {"add task"}
                </button>
            </div>
        );
    }
}
 
export default AddTask;