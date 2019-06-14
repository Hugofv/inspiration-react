import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import Todo from "./../todo";
import { urlAPI } from "../actions";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: ""
    };
  }

  componentDidMount() {
    let query = {
      query: `{
        Books{
          _id
          name
          editor
          released
          author {
            birthday
          }
        }
      }`
    };
    fetch(urlAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query)
    })
      .then(response => response.json())
      .then(data => this.setState({ api: data }));
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Todo} />
        <Route path="/autor" component={Todo} />
      </Router>
    );
  }
}
