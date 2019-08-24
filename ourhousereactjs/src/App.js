
import React, { Component } from "react";
import "./App.css";
import Login from "./components/messaging/Login";
import Home from "./components/messaging/Home";
import fire from "./components/config/fire";
import ls from "local-storage";
import { Router } from "@reach/router";
import Aframe from "./components/Aframe/src/index.js";
import HomePage from "./components/Homepage/HomePage";
import MaintenancePage from "./components/Maintenance/MaintenancePage";

class App extends Component {
  state = {
    user: null,
    email: "",
    username: ""
  };

  render() {
    const { user, username } = this.state;
    return (
      <>
      <Router>
        {user ? (
          <Home username={username} />
        ) : (
          <Login setStateWithUsername={this.setStateWithUsername} />
        )}
 <HomePage path="/" />
          <Aframe path="/360" userID={username} />
          <MaintenancePage path="/maintenance" />
</Router>
      </>
    );
  }

  componentDidMount() {
    this.authListener();
    ls.get("currentUsername");
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  setStateWithUsername = username => {
    this.setState({ username });
    ls.set("currentUsername", username);
  };

}

export default App;
