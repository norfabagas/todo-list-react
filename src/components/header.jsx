import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div
        className="card-header"
      >
        Todo {" "}
        <span className="badge badge-sm badge-secondary">
          {this.props.taskCounter}
        </span>
      </div>
    );
  }
}

export default Header;