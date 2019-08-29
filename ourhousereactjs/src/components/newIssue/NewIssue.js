import React, { Component } from "react";
import Aframe from "../Aframe/src/index.js";
import { navigate } from "@reach/router";

import "./newissue.css";
import ls from "local-storage";
import * as API from "../../api";

class NewIssue extends Component {
  state = {
    SelectedRoom: null,
    Issue: "",
    Description: "",
    SelectedArea: "None",
    launch360: false,
    Rooms: [
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
    const { Rooms } = this.state;
    const { Issue, Description, Launch360 } = this.state;

    return (
      <>
        {Launch360 ? <Aframe postNewIssue={this.postNewIssue} /> : null}
        <div className="newIssue-page">
          <h1>Submit an Issue </h1>
          <form onSubmit={this.handleSubmit} className="issue-form">
            <div className="room-issue-desc">
              <h3>What room is the issue in? </h3>
              <div id="issue-btn-container">
                {Rooms.map((room, i) => {
                  return (
                    <input
                      key={room.room_id}
                      type="button"
                      name="SelectedRoom"
                      value={room.name}
                      className="issue-btn"
                      id={i}
                      onClick={e => {
                        const btn = document.getElementById(i);
                        btn.className = "issue-btn selected";
                        this.handleChange(e);
                      }}
                    />
                  );
                })}
              </div>

              <div className="issue-row">
                <div className="row-item-issue_desc">
                  <h3>What is the issue? </h3>
                  <input
                    type="text"
                    required
                    name="Issue"
                    onChange={this.handleChange}
                    value={Issue}
                    className="issue-input"
                  />

                  <h3>Description of your issue: </h3>
                  <textarea
                    rows="10"
                    cols="40"
                    name="Description"
                    onChange={this.handleChange}
                    value={Description}
                    required
                    className="issue-input-description"
                  />
                </div>

                <div className="row-item">
                  <h3>Select area:</h3>
                  <input
                    type="button"
                    value="Choose area"
                    onClick={this.launch360}
                    name="SelectedRoom"
                    className="issue-btn select-area"
                    disabled={this.state.SelectedArea !== "None"}
                  />

                  <input
                    type="submit"
                    value="Submit"
                    className="issue-btn submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    //if (e.target.name === 'selectedRoom'){} //Make GET request for room image
  };

  postNewIssue = location => {
    this.setState({
      Launch360: false,
      SelectedArea: location
    });
  };

  launch360 = () => {
    this.setState({ Launch360: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    const Email = ls.get("Email");
    const { Issue, Description, SelectedArea, SelectedRoom } = this.state;
    const newissue = {
      Email,
      Issue,
      Description,
      SelectedArea,
      SelectedRoom
    };
    return API.postMaintenanceIssue(newissue)
      .then(issue => {
        console.log(issue);
        navigate("/maintenance");
      })
      .catch(console.log);
  };
}

export default NewIssue;
