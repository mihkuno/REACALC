import React, { Component } from "react";
import { Button } from "@chakra-ui/react";

class Key extends Component {
  style = {
    fontSize: 25,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  state = {};

  render() {
    return (
      <Button
        colorScheme="teal"
        style={this.style}
        onClick={() => this.props.onClick(this.props.state)}
      >
        {this.props.state.value}
      </Button>
    );
  }
}

export default Key;
