import React, { Component } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Display from "./Display";
import Key from "./Key";

class App extends Component {
  state = {
    keys: [
      { id: "key-15", value: "9" },
      { id: "key-14", value: "8" },
      { id: "key-13", value: "7" },
      { id: "key-12", value: "/" },
      { id: "key-11", value: "6" },
      { id: "key-10", value: "5" },
      { id: "key-9", value: "4" },
      { id: "key-8", value: "*" },
      { id: "key-7", value: "3" },
      { id: "key-6", value: "2" },
      { id: "key-5", value: "1" },
      { id: "key-4", value: "-" },
      { id: "key-3", value: "C" },
      { id: "key-2", value: "0" },
      { id: "key-1", value: "=" },
      { id: "key-0", value: "+" },
    ],
    out: "0",
  };

  keyPressed = (key) => {
    const { out } = this.state;
    // clear pressed
    if (key.value === "C") {
      this.setState({ out: "0" });
    }

    // equal pressed
    else if (key.value === "=") {
      this.setState({ out: eval(out).toString() });
    }

    // no leading zero and operator
    // allow leading minus
    else if (
      !(
        (out === "0" || out === "-") &&
        (key.value === "0" || (isNaN(key.value) && key.value !== "-"))
      )
    ) {
      // replace leading zero
      if (out === "0") {
        this.setState({ out: key.value });
      }

      // replace duplicate operator
      else if (isNaN(out.charAt(out.length - 1)) && isNaN(key.value)) {
        this.setState({
          out: out.slice(0, out.length - 1) + key.value,
        });
      }

      // append numbers
      else {
        this.setState({ out: out + key.value });
      }
    }
  };

  render() {
    return (
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(6, 1fr)"
        h="100vh"
        gap={1}
      >
        <GridItem colSpan={4} rowSpan={2}>
          <Display value={this.state.out} />
        </GridItem>

        {this.state.keys.map((keyState) => (
          <GridItem>
            <Key key={keyState.id} state={keyState} onClick={this.keyPressed} />
          </GridItem>
        ))}
      </Grid>
    );
  }
}

export default App;
