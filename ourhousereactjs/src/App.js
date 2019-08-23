import React from "react";
import "./App.css";
import Login from "./components/messaging/Login";
import Home from "./components/messaging/Home";
import fire from "./components/config/fire";

class App extends React.Component {
  state = {
    user: null,
    email: "",
    username: ""
  };

  render() {
    const { user, username } = this.state;
    return (
      <>
        {user ? (
          <Home username={username} />
        ) : (
          <Login setStateWithUsername={this.setStateWithUsername} />
        )}
      </>
    );
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  setStateWithUsername = username => {
    this.setState({ username });
  };
}

export default App;
