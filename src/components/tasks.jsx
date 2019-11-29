import React, { Component } from 'react';
import Task from './task';

class Tasks extends Component {
    render() { 
        return (
            <ul
                className="list-group"
            >
                {this.props.tasks.map(task => 
                    <Task
                        key={task.id}
                        id={task.id}
                        task={task}
                        onSwitchStatus={this.props.onSwitchStatus}
                        onDeleteTask={this.props.onDeleteTask}
                    />
                )}
            </ul>
        );
    }
}
 
export default Tasks;