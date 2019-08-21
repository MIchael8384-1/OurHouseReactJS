import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Aframe from "./Components/Aframe/src/index";

if (window.location.pathname !== "/360") {
  ReactDOM.render(<App />, document.getElementById("root"));
} else ReactDOM.render(<Aframe />, document.querySelector("#sceneContainer"));
