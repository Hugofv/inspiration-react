import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Atividade</th>
            </tr>
          </thead>

          <tbody>
            {this.props.todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
