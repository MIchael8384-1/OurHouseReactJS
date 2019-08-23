import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Aframe from "./Components/Aframe/src/index";
import HomePage from "./Components/Homepage/HomePage";
import MaintenancePage from "./Components/Maintenance/MaintenancePage";

class App extends Component {
  state = {
    username: 'NA'
  };

  render() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/" />
          <Aframe path="/360" userID={this.state.username} />
          <MaintenancePage path="/maintenance" />
        </Router>
      </div>
    );
  }
}

export default App;
