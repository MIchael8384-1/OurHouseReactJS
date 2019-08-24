import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Aframe from "./components/Aframe/src/index";
import HomePage from "./components/Homepage/HomePage";
import MaintenancePage from "./components/Maintenance/MaintenancePage";

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
