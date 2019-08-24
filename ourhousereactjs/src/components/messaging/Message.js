import React from "react";

const Message = ({ message, createdAt, username }) => {
  const postedDate = new Date(createdAt).toString();
  return (
    <div className="box">
      <ol>
        <h6>{message}</h6>
        <h6>{username}</h6>
        <h6>{postedDate.split("+")[0]}</h6>
      </ol>
    </div>
  );
};

export default Message;
