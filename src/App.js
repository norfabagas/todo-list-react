import React from 'react';
import './App.css';
import Tasks from './components/tasks';
import Header from './components/header';
import AddTask from './components/add-task';


class App extends React.Component {
  state = {
    input: '',
    tasks: []
  }

  handleInput = e => {
    e.preventDefault();
    const tasks = [...this.state.tasks];
    this.setState({ input: e.target.value })
  }

  handleSubmitTask = () => {
    let taskName = this.state.input;
    let tasks = [...this.state.tasks];

    this.setState({ input: '' });

    if (taskName !== '') {
      tasks.push({
        id: Date.now(),
        name: taskName,
        done: false
      });
    }

    this.setState({ tasks });
  }

  handleSwitchStatus = task => {
    let tasks = [...this.state.tasks];
    let index = tasks.indexOf(task);
    
    if (tasks[index].done) {
      tasks[index].done = false;
    } else {
      tasks[index].done = true;
    }

    this.setState({ tasks });
  }

  handleDeleteTask = task => {
    let tasks = this.state.tasks.filter(c => c.id !== task.id);
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="col-md-6 offset-3 mt-4">
        <AddTask 
          onInput={this.handleInput}
          onSubmitTask={this.handleSubmitTask}
          inputValue={this.state.input}
        />
        <div className="card">
          <Header 
            taskCounter={this.state.tasks.filter(c => !c.done).length}
          />
          <div
            className="card-body"
          >
            <Tasks 
              tasks={this.state.tasks}
              onSwitchStatus={this.handleSwitchStatus}
              onDeleteTask={this.handleDeleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
