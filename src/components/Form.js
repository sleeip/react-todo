import React, { Component } from "react";
import TodoList from "./TodoList";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      globalid: 0,
      list: []
    };
  }

  appendToList = (val) => {
    let stateSave = this.state.list;
    stateSave.push({
      title: val,
      todoStatus: "todo",
      id: this.state.globalid + 1
    });

    this.setState({
      globalid: this.state.globalid + 1,
      list: stateSave
    });
  }

  render() {
    let input;
    return (
      <div>
        <input type="text" ref={a => (input = a)} />
        <button
          onClick={() => {
            this.appendToList(input.value);
            input.value = "";
          }}
        >
          go
        </button>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}
