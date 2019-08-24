import React, { Component } from "react";
import Aframe from "../Aframe/src/index.js.js";

class NewIssue extends Component {
  state = {
    selectedRoom: null,
    issue: "",
    description: "",
    selectedArea: "None",
    launch360: false
  };

  render() {
    const { rooms } = this.props;
    const { issue, description, launch360 } = this.state;
    return (
      <>
        {launch360 ? <Aframe postNewIssue={this.postNewIssue} /> : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>Room: </h3>
            {rooms.map(room => {
              return (
                <div key={room.room_id}>
                  <input
                    type="radio"
                    name="selectedRoom"
                    value={room.name}
                    onChange={this.handleChange}
                  />{" "}
                  {room.name}
                </div>
              );
            })}
            <br />
            <h3>Issue: </h3>
            <input
              type="text"
              required
              name="issue"
              onChange={this.handleChange}
              value={issue}
            />
            <br />
            <h3>Description: </h3>
            <textarea
              rows="10"
              cols="40"
              name="description"
              onChange={this.handleChange}
              value={description}
              required
            />
            <h3>Select area</h3>
            <input
              type="button"
              value="Choose area"
              onClick={this.launch360}
              name="selectedRoom"
              disabled={this.state.selectedArea !== "None"}
            />
            <p>Currently selected area: {this.state.selectedArea}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }

  roomRequest = event => {
    console.log(event.target);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    // if (name === 'selectedRoom') Make GET request for room image
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
  };
}

export default NewIssue;
