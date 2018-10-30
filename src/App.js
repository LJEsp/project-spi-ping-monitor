import React, { Component } from "react";
import "./App.css";
import PingItemContainer from "./components/ping-item/ping-item-container";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: 0
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh(e) {
    e.preventDefault();

    this.setState({ refresh: this.state.refresh + 1 }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <h1>Ping Monitor</h1>

        <button onClick={this.onRefresh}>Refresh</button>

        <PingItemContainer key={this.state.refresh} />
      </div>
    );
  }
}

export default App;
