import React from "react";
import { Link } from "@reach/router";

const HomeHeader = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Link to="/maintenance">
        <h2>You gotta problem?</h2>
      </Link>
    </>
  );
};

export default HomeHeader;
