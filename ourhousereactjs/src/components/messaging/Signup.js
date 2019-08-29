import React, { Component } from "react";
import fire, { db } from "../config/fire";
import { Link } from "@reach/router";
import styled from "styled-components";
import logo from "../../media/OurHouse.png";
import emailicon from "../../media/email.png";
import lockicon from "../../media/lock.png";
import nameicon from "../../media/name.png";
import "./signup.css";
import { navigate } from "@reach/router";

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

const Input4 = styled.input`
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

const Input5 = styled.input`
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

class Signup extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
    firstName: "",
    lastName: "",
    err: null
  };

  render() {
    const { email, password, userName, firstName, lastName } = this.state;
    return (
      <div className="signup-page">
        <Link to="/">
          <img className="OurHouseLogo" src={logo} alt="Our House Logo"></img>
        </Link>
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
            type="password"
            onChange={this.onChange}
            value={password}
          />
          <Input3
            id="firstName"
            placeholder="Enter your first name..."
            type="text"
            onChange={this.onChange}
            value={firstName}
          />
          <Input4
            id="lastName"
            placeholder="Enter your last name..."
            type="text"
            onChange={this.onChange}
            value={lastName}
          />
          <Input5
            id="userName"
            placeholder="Enter your username..."
            type="text"
            onChange={this.onChange}
            value={userName}
          />
          <Button onClick={this.signUp}>CREATE ACCOUNT</Button>
        </div>
      </div>
    );
  }

  onChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  signUp = e => {
    const { email, password, userName, firstName, lastName } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user: { uid } }) => {
        db.collection("Users").add({
          username: userName,
          user_id: uid,
          firstName,
          lastName
        });
      })
      .then(
        this.setState({
          email: "",
          password: "",
          userName: "",
          firstName: "",
          lastName: ""
        })
      );
    navigate(`/dashboard`).catch(err => {
      this.setState({ err });
    });
  };
}

export default Signup;
