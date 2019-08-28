import React from "react";
import { Link } from "@reach/router";
import logo from "../../media/OurHouse.png";
import "./header.css";

const Header2 = ({ user }) => {
  console.log(user);
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
          <>
            <Link to="/login" className="option">
              TENANT LOGIN
            </Link>
            <Link to="/login" className="option">
              LANDLORD LOGIN
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
