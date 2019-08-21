import React from "react";
import "./App.css";
import Login from "./components/messaging/Login";
import Home from "./components/messaging/Home";
import fire from "./components/config/fire";

class App extends React.Component {
  state = {
    user: null,
    email: ""
  };

  render() {
    const { user } = this.state;
    return <>{user ? <Home /> : <Login />}</>;
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }
}

export default App;
