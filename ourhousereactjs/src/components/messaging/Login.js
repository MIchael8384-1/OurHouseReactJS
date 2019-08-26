import React, { Component } from "react";
import fire, { db } from "../config/fire";
import { Link } from "@reach/router";
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
  font-family: Futura;
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
        <Link to="/">
          <img className="OurHouseLogo" src={logo} alt="Our House Logo"></img>
        </Link>
        <div className="SignupText">Log in</div>
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
          <Button onClick={this.logIn}>SIGN IN</Button>
        </div>

        <div className="ExistingUserSignin">
          Don't have an account?
          <Link to="/signup">
            <button className="SigninButton">Sign up </button>
          </Link>
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
}

export default Login;
