import React from "react";
import fire from "../config/fire";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    err: null
  };

  render() {
    const { email, password } = this.state;
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
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(console.log(email)) // at this point you can access the email address via console
      .then(this.setState({ email: "", password: "" }))
      .catch(err => {
        this.setState({ err });
      });
  };

  signUp = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.setState({ email: "", password: "" }))
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default Login;
