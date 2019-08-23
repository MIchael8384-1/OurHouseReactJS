import React from "react";

const Message = ({ message, createdAt, username }) => {
  const postedDate = new Date(createdAt).toString();
  // when we write a message we want on our username on it
  // post a new message
  return (
    <div className="box">
      <ol>
        <h6>{message}</h6>
        <h6>{username}</h6>
        <h6>{postedDate}</h6>
      </ol>
    </div>
  );
};

export default Message;
