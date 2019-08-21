import "aframe";
import "aframe-particle-system-component";
import "babel-polyfill";
import { Entity, Scene } from "aframe-react";
import React from "react";
import room2 from "../StaticAssets/Room2.jpg";

class Aframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      opacity: 0.05,
      selectedSquare: "Choose one"
    };
  }

  handleClick = event => {
    this.setState({
      selectedSquare: event.target.id,
      color: event.target.components.material.attrValue.color
    });
  };
  handleHover = () => {
    this.setState({
      opacity: 0.8
    });
  };
  handleMouseExit = () => {
    this.setState({
      opacity: 0.05
    });
  };
  render() {
    return (
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt="ground texture"
          />
          <img id="skyTexture" src={room2} alt="Indoor room" />
        </a-assets>

        <Entity primitive="a-light" type="ambient" color="#445451" />

        <Entity primitive="a-sky" src="#skyTexture" />
        <Entity
          text={{
            value: `Current area is: ${this.state.selectedSquare}`,
            color: this.state.color,
            height: 8,
            width: 8
          }}
          position={{ x: 0, y: 4, z: -5 }}
        />
        <Entity
          id="Wall1"
          geometry={{ primitive: "plane", height: 5.2, width: 12.4 }}
          material={{ color: "#ffffff", opacity: 0 }}
          position={{ x: -0.8, y: 1, z: -6 }}
          events={{
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1A"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "black", opacity: this.state.opacity }}
          position={{ x: -5.35, y: 2.4, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1B"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "blue", opacity: this.state.opacity }}
          position={{ x: -5.35, y: -0.3, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1C"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "red", opacity: this.state.opacity }}
          position={{ x: -2.25, y: -0.3, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1D"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "green", opacity: this.state.opacity }}
          position={{ x: -2.25, y: 2.4, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1E"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "yellow", opacity: this.state.opacity }}
          position={{ x: 0.85, y: 2.4, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1F"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "cyan", opacity: this.state.opacity }}
          position={{ x: 0.85, y: -0.3, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1G"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "fuchsia", opacity: this.state.opacity }}
          position={{ x: 3.95, y: 2.4, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />
        <Entity
          id="1H"
          geometry={{ primitive: "plane", height: 2.5, width: 3.1 }}
          material={{ color: "purple", opacity: this.state.opacity }}
          position={{ x: 3.95, y: -0.3, z: -5.9 }}
          events={{
            click: this.handleClick,
            mouseenter: this.handleHover,
            mouseleave: this.handleMouseExit
          }}
        />

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" />
        </Entity>
      </Scene>
    );
  }
}
export default Aframe;

