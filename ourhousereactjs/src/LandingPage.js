import React from "react";
import Illustration from "./media/OurHouseIllustration.png";
import logo from "./media/OurHouse.png";
import { Link } from "@reach/router";

const LandingPage = () => {
  return (
    <>
      <Link to="/login">
        <img className="OurHouseLogo2" src={logo} alt="Our House Logo" />
      </Link>
      <img
        src={Illustration}
        style={{ width: "100%", marginLeft: "1%", marginTop: "11%" }}
        alt="Our House Illustration"
      />
    </>
  );
};

export default LandingPage;
