import React from "react";
import Message from "./Message";
import { db } from "../config/fire";

class Form extends React.Component {
  state = {
    msg: "",
    userName: "KateBryan",
    createdAt: "",
    messageData: null,
    err: null
  };

  render() {
    const { msg, messageData } = this.state;
    return (
      <>
        {messageData
          ? messageData.map(data => (
              <Message
                message={data.msg}
                userName={data.userName}
                createdAt={data.createdAt}
                key={data.createdAt}
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
    const { userName, msg, createdAt } = this.state;
    e.preventDefault();
    db.collection("chatrooms")
      .doc("1 Federation House")
      .collection("messages")
      .add({ userName, msg, createdAt })
      .then(this.setState({ userName: "", msg: "", createdAt: "" }))
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

export default Form;
