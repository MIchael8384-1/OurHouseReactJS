import React, { Component } from "react";
import fire, { db } from "../config/fire";
import styled from "styled-components";
import logo from "../../media/OurHouse.png";
import emailicon from "../../media/email.png";
import lockicon from "../../media/lock.png";
import nameicon from "../../media/name.png";

const Input = styled.input`
  padding-left: 35px;
  border: 1px solid rgba(237, 49, 146, 1);
  border-radius: 30px;
  font-size: 12px;
  width: 24em;
  height: 3em;
  background-image: url(${emailicon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 7px center;
  margin-bottom: 0.75em;
`;

const Input2 = styled.input`
  padding-left: 35px;
  border: 1px solid rgba(237, 49, 146, 1);
  border-radius: 30px;
  font-size: 12px;
  width: 24em;
  height: 3em;
  background-image: url(${lockicon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 7px center;
  margin-bottom: 0.75em;
`;

const Input3 = styled.input`
  padding-left: 35px;
  border: 1px solid rgba(237, 49, 146, 1);
  border-radius: 30px;
  font-size: 12px;
  width: 24em;
  height: 3em;
  background-image: url(${nameicon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 7px center;
  margin-bottom: 0.75em;
`;

const Button = styled.button`
  border-radius: 30px;
  border: none;
  color: white;
  background-color: rgba(237, 49, 146, 1);
  width: 27em;
  height: 3em;
  font-size: 12px;
`;

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
        <img className="OurHouseLogo" src={logo} alt="Our House Logo"></img>
        <div className="SignupText">Sign up</div>
        <div className="SignupFormContainer">
          <Input
            id="email"
            placeholder="Enter your email address..."
            type="email"
            onChange={this.onChange}
            value={email}
          />
          <Input2
            id="password"
            placeholder="Enter your password..."
            type="text"
            onChange={this.onChange}
            value={password}
          />
          <Input3
            id="userName"
            placeholder="Enter your username"
            type="text"
            onChange={this.onChange}
            value={userName}
          />
          <Button onClick={this.signUp}>CREATE ACCOUNT</Button>
        </div>

        <div className="ExistingUserSignin">
          Already have an account?
          <button className="SigninButton" onClick={this.logIn}>
            Sign in{" "}
          </button>
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
