import React, { Component } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Display from "./Display";
import Key from "./Key";

class App extends Component {
  state = {
    keys: [
      "9",
      "8",
      "7",
      "/",
      "6",
      "5",
      "4",
      "*",
      "3",
      "2",
      "1",
      "-",
      ".",
      "0",
      "=",
      "+",
    ],
  };
  render() {
    return (
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(6, 1fr)"
        gap={1}
        h="100vh"
      >
        <GridItem colSpan={4} rowSpan={2}>
          <Display />
        </GridItem>

        {this.state.keys.map((key) => (
          <GridItem bg="teal">
            <Key value={key} />
          </GridItem>
        ))}
      </Grid>
    );
  }
}

export default App;
