import React from "react";
import { Link, navigate } from "@reach/router";
import logo from "../../media/OurHouse.png";
import "./header.css";
import fire from "../config/fire";
import ls from "local-storage";
import styled from "styled-components";

const Button = styled.button`
  background: rgba(74, 48, 110, 1);
  color: rgba(237, 49, 146, 1);
  cursor: pointer;
  color: white;
  border: none;
  margin: 20px;
  top: 50%;
  font-family: "Futura";
  font-size: 16px;
  :hover {
    cursor: pointer;
    color: #ed3192;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="nav-bar">
          <Link to="/" className="our-house-btn">
            <img
              src={logo}
              alt="our house logo"
              style={{ width: "7em", height: "3.5em", marginTop: "3px" }}
            />
          </Link>
          <div>
            <Button onClick={this.logOut}>LOG OUT</Button>
            <Link to="/dashboard" className="option">
              DASHBOARD
            </Link>
            <Link to="/maintenance" className="option">
              MAINTENANCE
            </Link>
          </div>
        </nav>
      </div>
    );
  }
  logOut = e => {
    fire.auth().signOut();
    ls.clear();
    navigate(`/`).catch(err => {
      this.setState({ err });
    });
  };
}

export default Header;
