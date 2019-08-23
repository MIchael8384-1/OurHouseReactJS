import React from "react";
import fire from "../config/fire";
import Chatroom from "./Chatroom";

class Home extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <>
        <header>Welcome to the Home Page</header>
        <h3>You are now logged in</h3>
        <Chatroom username={username} />
        <button onClick={this.logOut}>Log out</button>
      </>
    );
  }

  logOut = e => {
    fire.auth().signOut();
  };
}

export default Home;
