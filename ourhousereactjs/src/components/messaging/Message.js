import React from "react";

const Message = ({ message, userName, createdAt }) => {
  const postedDate = new Date(createdAt).toString();
  return (
    <div className="box">
      <ol>
        <h6>{message}</h6>
        <h6>{userName}</h6>
        <h6>{postedDate}</h6>
      </ol>
    </div>
  );
};

export default Message;
