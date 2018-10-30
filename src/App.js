import React, { Component } from "react";
import "./App.css";
import Ping from "ping.js";

class App extends Component {
  constructor() {
    super();

    this.p = new Ping();

    this.state = {
      google: ""
    };
  }

  componentDidMount() {
    this.p.ping("http://googlet2894hct04.com", (err, data) => {
      if (err) {
        return console.log("Error", err);
      }

      this.setState({ google: data });
    });
  }

  render() {
    return <div>{this.state.google}</div>;
  }
}

export default App;
