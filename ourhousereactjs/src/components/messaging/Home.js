import React from "react";
import fire from "../config/fire";
import Chatroom from "./Chatroom";

class Home extends React.Component {
  render() {
    return (
      <>
        <header>Welcome to the Home Page</header>
        <h3>You are now logged in</h3>
        <Chatroom email={this.props.email} />
        <button onClick={this.logOut}>Log out</button>
      </>
    );
  }

  logOut = e => {
    fire.auth().signOut();
  };
}

export default Home;
