import React from "react";
import Message from "./Message";
import fire, { db } from "../config/fire";

class Chatroom extends React.Component {
  state = {
    msg: "",
    createdAt: "",
    messageData: null,
    err: null
  };

  render() {
    const { msg, messageData } = this.state;
    const { username } = this.props;
    return (
      <>
        {messageData
          ? messageData.map(data => (
              <Message
                message={data.msg}
                createdAt={data.createdAt}
                key={data.createdAt}
                username={username}
              />
            ))
          : "Loading..."}
        <div>
          <input
            type="text"
            placeholder="Type message..."
            value={msg}
            onChange={this.onChange}
          />
          <button onClick={this.onClick}>Send</button>
        </div>
      </>
    );
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ msg: value, createdAt: Date.now() });
  };

  onClick = e => {
    const { msg, createdAt } = this.state;
    const { username } = this.props;
    e.preventDefault();
    fire.auth();
    db.collection("chatrooms")
      .doc("1 Federation House")
      // currently we don't have a back-end so can't query based on address
      .collection("messages")
      .add({ username, msg, createdAt })
      .then(this.setState({ msg: "", createdAt: "" }))
      .catch(err => this.setState({ err }));
  };

  returnMessages() {
    db.collection("chatrooms")
      .doc("1 Federation House")
      .collection("messages")
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
