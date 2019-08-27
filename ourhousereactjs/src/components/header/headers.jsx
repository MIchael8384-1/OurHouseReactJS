import React from "react";
import { Link } from "@reach/router";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-bar">

      <Link to="/" className="our-house-btn">
          OurHouse
        </Link>

        <div>
          <Link to="/messaging" className="option">
            MESSAGING
          </Link>
          <Link to="/maintenance" className="option">
            MAINTENANCE
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;