import React, { Component } from 'react';

class Task extends Component {
    isDone = task => {
        if (task.done) {
            return 'text-danger striped';
        }
    }

    switchButtonText = task => {
        if (task.done) {
            return 'uncheck';
        } else {
            return 'check';
        }
    }
    
    render() { 
        const isDone = this.isDone(this.props.task);
        const switchButtonText = this.switchButtonText(this.props.task);

        return (
            <li
                className="list-group-item"
            >
                <span
                    className={isDone}
                >
                    {this.props.task.name}
                </span>
                <div className="btn-group float-right">
                    <button
                        className="btn btn-secondary btn-sm float-right"
                        onClick={() => this.props.onSwitchStatus(this.props.task)}
                    >
                        {switchButtonText}
                    </button>
                    <button 
                        className="btn btn-sm btn-danger float-right"
                        onClick={() => this.props.onDeleteTask(this.props.task)}
                    >
                        {"delete"}
                    </button>

                </div>
            </li>
        );
    }
}
 
export default Task;