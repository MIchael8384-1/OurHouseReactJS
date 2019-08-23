import React, { Component } from "react";
import Aframe from "../Aframe/src/index.js";

class NewIssue extends Component {
  state = {
    selectedRoom: null,
    description: ""
  };

  render() {
    const { rooms } = this.props;
    const { selectedRoom } = this.state;
    return (
      <>
        {selectedRoom ? <Aframe postNewIssue={this.postNewIssue} /> : null}
        <div>
          <form onSubmit={this.handleChange}>
            <h3>Room: </h3>
            {rooms.map(room => {
              return (
                <>
                  <input type="radio" name="room" value={room} /> {room}
                </>
              );
            })}
            <br />
            <h3>Issue: </h3>
            <input type="text" required />
            <br />
            <h3>Description: </h3>
            <textarea
              rows="10"
              cols="40"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              required
            />
          </form>
        </div>
      </>
    );
  }

  handleSubmit = ({ target: { value } }) => {
    //MAKE A GET REQUEST TO DB FOR PICTURE
    this.setState({ selectedRoom: value });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  postNewIssue = location => {
    //MAKE A POST REQUEST TO THE DB WITH A NEW ISSUE:
    //WITH KEYS OF: LOCATION, ROOM, DESC, ISSUE
    console.log(location);
    this.setState({ selectedRoom: null });
  };
}

export default NewIssue;
