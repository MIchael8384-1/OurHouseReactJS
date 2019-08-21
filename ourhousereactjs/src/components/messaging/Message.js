import React from "react";

const Message = ({ message, userName, createdAt }) => {
  const postedDate = new Date(createdAt).toString();
  return (
    <div className="box">
      <h2>{message}</h2>
      <h4>{userName}</h4>
      <h4>{postedDate}</h4>
    </div>
  );
};

export default Message;
