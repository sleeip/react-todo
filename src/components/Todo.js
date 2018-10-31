import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }

  changeColor = () => {
    this.setState({ done: true });
  }

  render() {
    let itemStatus = this.state.done ? "done" : "todo";
    return (
      <li
        className={itemStatus}
        key={this.props.idf}
        onClick={this.changeColor}
      >
        {this.props.text}
      </li>
    );
  }
}
export default Todo;
