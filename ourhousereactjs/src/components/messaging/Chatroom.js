import React from "react";
import Message from "./Message";
import fire, { db } from "../config/fire";
import styled from "styled-components";
import download from "../../media/download.png";

const Button = styled.button`
  border-radius: 30px;
  border: none;
  color: white;
  background-color: rgba(237, 49, 146, 1);
  width: 6em;
  height: 3em;
  font-size: 12px;
  font-family: Futura;
`;

const Input = styled.input`
  padding-left: 35px;
  border: 1px solid rgba(237, 49, 146, 1);
  border-radius: 30px;
  font-size: 12px;
  width: 24em;
  height: 3em;
  margin-right: 2em;
  font-family: Futura;
  margin-bottom: 5px;
`;

const H4 = styled.h4`
  display: flex;
  justify-content: center;
  font-size: 15px;
  position: sticky;
  top: 0;
  background-image: url(${download});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 7px center;
  margin-top: 5px;
`;

class Chatroom extends React.Component {
  state = {
    msg: "",
    createdAt: "",
    messageData: null,
    err: null
  };

  render() {
    const { msg, messageData } = this.state;
    return (
      <>
        <div className="Chatroom">
          <div className="ChatroomMessages">
            <H4> 1 Federation House</H4>
            {messageData
              ? messageData.map(data => (
                  <Message
                    message={data.msg}
                    createdAt={data.createdAt}
                    key={data.createdAt}
                    username={data.username}
                  />
                ))
              : "Loading..."}
          </div>
          <div className="StickyInput">
            <Input
              type="text"
              placeholder="Type message..."
              value={msg}
              onChange={this.onChange}
            />
            <Button onClick={this.onClick}>Send</Button>
          </div>
        </div>
      </>
    );
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ msg: value, createdAt: Date.now() });
    db.collection("chatrooms")
      .doc("1 Federation House")
      .collection("messages")
      .onSnapshot(QuerySnapshot => {
        const data = QuerySnapshot.docs.map(doc => doc.data());
        this.setState({ messageData: data });
      });
  };

  onClick = e => {
    const { msg, createdAt } = this.state;
    let currentUser = window.localStorage.getItem("currentUsername");
    currentUser = JSON.parse(currentUser);
    e.preventDefault();
    fire.auth();
    db.collection("chatrooms")
      .doc("1 Federation House")
      .collection("messages")
      .add({ username: currentUser, msg, createdAt })
      .then(this.setState({ msg: "", createdAt: "" }))
      .catch(err => this.setState({ err }));
  };

  returnMessages() {
    db.collection("chatrooms")
      .doc("1 Federation House")
      .collection("messages")
      .orderBy("createdAt", "asc")
      .get()
      .then(QuerySnapshot => {
        const data = QuerySnapshot.docs.map(doc => doc.data());
        this.setState({ messageData: data });
      })
      .catch(err => this.setState({ err }));
  }

  componentDidMount() {
    this.returnMessages();
  }
}

export default Chatroom;
