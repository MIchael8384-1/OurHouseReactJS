import React, { Component } from "react";
import fire, { db } from "../config/fire";

class Login extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    err: null
  };

  render() {
    const { email, password, userName } = this.state;
    return (
      <>
        <div>Email</div>
        <input
          id="email"
          placeholder="Enter your Email address..."
          type="email"
          onChange={this.onChange}
          value={email}
        />
        <div>Password</div>
        <input
          id="password"
          placeholder="Enter your password..."
          type="text"
          onChange={this.onChange}
          value={password}
        />
        <div>
          <div>Username</div>
          <input
            id="userName"
            placeholder="Enter your username..."
            type="text"
            onChange={this.onChange}
            value={userName}
          />
          <button onClick={this.logIn}>Login </button>
          <button onClick={this.signUp}>Sign Up</button>
        </div>
      </>
    );
  }

  onChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  logIn = e => {
    const { email, password, userName } = this.state;
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.setState({ email: "", password: "" }))
      .then(({ user: { uid } }) => {
        // speak to beautiful soup
        db.collection("Users")
          .where("user_id", "==", uid)
          .where("username", "==", userName)
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.props.setStateWithUsername(data[0].username);
          });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  signUp = e => {
    const { email, password, userName } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user: { uid } }) => {
        db.collection("Users").add({
          username: userName,
          user_id: uid
        });
      })
      .then(this.setState({ email: "", password: "", userName: "" }))
      .catch(err => {
        this.setState({ err });
      });
    // when you sign up, the username isn't going into local storage
  };
}

export default Login;
