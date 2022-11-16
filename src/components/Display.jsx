import React, { Component } from "react";

class Display extends Component {
  style = {
    text: {
      color: "#99AAB5",
      padding: 25,
      fontSize: 80,
      fontWeight: 500,
    },
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "end",
      justifyContent: "right",
      backgroundColor: "#2C2F33",
    },
  };

  state = { value: 0 };

  render() {
    return (
      <div style={this.style.container}>
        <h1 style={this.style.text}>{this.state.value}</h1>
      </div>
    );
  }
}

export default Display;
