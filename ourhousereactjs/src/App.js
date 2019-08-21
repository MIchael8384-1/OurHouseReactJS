import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Aframe from "./Components/Aframe/src/index";
import HomePage from "./Components/Homepage/HomePage";

class App extends Component {
  state = {
    userID: 1
  };

  render() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/" />
          <Aframe path="/360" userID={this.state.userID} />
        </Router>
      </div>
    );
  }
}

export default App;
