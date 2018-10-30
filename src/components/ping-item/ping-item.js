import React, { Component } from "react";
import Ping from "ping.js";
// import webping from "web-pingjs";

class PingItem extends Component {
  constructor(props) {
    super(props);

    this.p = new Ping();

    this.state = {
      pingState: "-",
      pingData: "-"
    };
  }

  componentDidMount() {
    if (!this.props.useUrl) {
      this.p.ping(`http://www.${this.props.domain}`, (err, data) => {
        if (err) {
          return this.setState({ pingState: "DOWN", pingData: "" });
        }

        this.setState({ pingState: "UP", pingData: data });
      });
    } else {
      this.p.ping(this.props.url, (err, data) => {
        if (err) {
          return this.setState({ pingState: "DOWN", pingData: "" });
        }

        this.setState({ pingState: "UP", pingData: data });
      });
    }

    // webping(this.props.url)
    //   .then(delta => {
    //     console.log(
    //       `${this.props.name}` + " ping time was " + String(delta) + " ms"
    //     );
    //   })
    //   .catch(function(err) {
    //     console.error("Could not ping remote URL", err);
    //   });
  }

  render() {
    return (
      <div className="ping-item">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          {this.props.domain}
        </a>{" "}

        <span
          style={
            this.state.pingState === "DOWN"
              ? { color: "red" }
              : { color: "green" }
          }
        >
          {this.state.pingState}{" "}
        </span>
      </div>
    );
  }
}

export default PingItem;
