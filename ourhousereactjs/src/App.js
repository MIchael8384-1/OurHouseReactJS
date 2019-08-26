import React, { Component } from "react";
import "./App.css";
import Login from "./components/messaging/Login";
import Home from "./components/messaging/Home";
import fire from "./components/config/fire";
import ls from "local-storage";
import { Router } from "@reach/router";
import MaintenancePage from "./components/Maintenance/MaintenancePage";
import LandingPage from "./LandingPage";

class App extends Component {
  state = {
    user: null,
    email: "",
    username: ""
  };

  render() {
    const { user, username } = this.state;
    return (
      <div className="App">
        <Router>
          <LandingPage path="/" />
          {user ? (
            <Home path="/home" username={username} />
          ) : (
            <Login
              path="/login"
              setStateWithUsername={this.setStateWithUsername}
            />
          )}
          <MaintenancePage path="/maintenance" />
        </Router>
      </div>
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
