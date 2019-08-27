import React, { Component } from "react";
import Aframe from "../Aframe/src/index.js";
import {
  navigate
} from "@reach/router"

import './newissue.css'

class NewIssue extends Component {
  state = {
    selectedRoom: null,
    issue: "",
    description: "",
    selectedArea: "None",
    launch360: false,
    rooms: [
      { name: "master bedroom", room_id: 1 },
      { name: "bedroom 2", room_id: 2 },
      { name: "bedroom 3", room_id: 3 },
      { name: "living room", room_id: 4 },
      { name: "en suite", room_id: 5 },
      { name: "bathroom", room_id: 6 },
      { name: "hallway", room_id: 7 },
      { name: "dining room", room_id: 8 },
      { name: "garden", room_id: 9 },
      { name: "garage", room_id: 10 },
      { name: "Stairs", room_id: 11 },
      { name: "kitchen", room_id: 12 }
    ]
  };

  render() {
    const { rooms } = this.state;
    const { issue, description, launch360 } = this.state;
    return (
      <>
        {launch360 ? <Aframe postNewIssue={this.postNewIssue} /> : null}
        <div>
        <h1>Submit an Issue </h1>
          <form onSubmit={this.handleSubmit} className="issue-form">
            <h3>What room is the issue in? </h3>
            <div className="issue-btn-container"> 
            {rooms.map(room => {
              return (
                  <input
                    key={room.room_id}
                    type="button"
                    name="selectedRoom"
                    value={room.name}
                    className="issue-btn"
                    onClick={this.handleChange}
                    
                  />
               
              );
            })}
            </div>
            <h3>What is the issue? </h3>
            <input
              type="text"
              required
              name="issue"
              onChange={this.handleChange}
              value={issue}
              className="issue-input"
            />
            
            <div className="issue-item">
            <h3>Description of your issue: </h3>
            <textarea
              rows="10"
              cols="40"
              name="description"
              onChange={this.handleChange}
              value={description}
              required
              className="issue-input-description"
            />
            </div>
            <div className="issue-area-and-submit">
            <h3>Select area</h3>
            <input
              type="button"
              value="Choose area"
              onClick={this.launch360}
              name="selectedRoom"
              disabled={this.state.selectedArea !== "None"}
            />
            <p>Current selected area: {this.state.selectedArea}</p>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  }

  roomRequest = event => {
    console.log(event.target);
  };

  handleChange = ({target:{name,value}}) => {
    this.setState({ [name]: value });
    if (name === 'selectedRoom'){} //Make GET request for room image
  };

  postNewIssue = location => {
    this.setState({
      launch360: false,
      selectedArea: location
    });
  };

  launch360 = () => {
    this.setState({ launch360: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      this.state.issue,
      this.state.description,
      this.state.selectedArea,
      this.state.selectedRoom
    );
    //Make a POST request to post new issue with keys above
    navigate('/maintenance')
    
  };
}

export default NewIssue;
