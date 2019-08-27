import React, { Component } from "react";
import "./App.css";
import Login from "./components/messaging/Login";
import Home from "./components/messaging/Home";
import fire from "./components/config/fire";
import ls from "local-storage";
import { Router } from "@reach/router";
import MaintenancePage from "./components/Maintenance/MaintenancePage";
import TenantPropertyDetailsPage from "./components/TenantPropertyDetails/TenantPropertyDetails";
import Chatroom from "./components/messaging/Chatroom";
import Header from "./components/header/headers";
import NewIssue from "./components/newIssue/NewIssue";
import LandlordPropertyDetailsPage from "./components/LandlordPropertyPage/LandlordPropertyDetailsPage";
import LandingPage from "./LandingPage";
import Signup from "./components/messaging/Signup";

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
        <Header></Header>
        <Router>
          <LandingPage path="/" />
          {user ? (
            <LandlordPropertyDetailsPage
              path="/landlordpropertydetails"
              username={username}
            />
          ) : (
            <Login
              path="/login"
              setStateWithUsername={this.setStateWithUsername}
            />
          )}
          <Signup
            path="/signup"
            setStateWithUsername={this.setStateWithUsername}
          />
          <Home path="/logout" />
          <NewIssue path="/maintenance/newissue"></NewIssue>
          <MaintenancePage path="/maintenance" />
          <TenantPropertyDetailsPage path="/propertyDetails" />
          <Chatroom path="/messaging" username={username} />
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
