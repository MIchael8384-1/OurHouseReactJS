import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Aframe from "./Components/Aframe/src/index";
import HomeHeader from "./Components/Homepage/HomeHeader";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HomeHeader path="/home" />
        <Aframe path="/360" />
      </Router>
    </div>
  );
};

export default App;
