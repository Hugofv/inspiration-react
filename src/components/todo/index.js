import "./todo.css";

import React, { Component } from "react";

import TodoList from "./components/todolist";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: ""
    };
  }

  handleText(value) {
    this.setState({ todo: value });
  }

  createTodo() {
    const todoTemp = this.state.todos;
    const { todo } = this.state;

    todoTemp.push({
      id: 1,
      value: todo
    });
    this.setState({
      todo: "",
      todos: todoTemp
    });
  }

  render() {
    return (
      <div className="container">
        <div className="box-todo">
          <div>
            <span>O que fazer?</span>
            <input
              value={this.state.todo}
              onChange={event => this.handleText(event.target.value)}
              type="text"
            />
            <button type="button" onClick={() => this.createTodo()}>
              Criar
            </button>
          </div>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}
