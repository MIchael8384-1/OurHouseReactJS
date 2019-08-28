import React from "react";

const Message = ({ message, createdAt, username }) => {
  const postedDate = new Date(createdAt).toString();
  const fromMyself = username == "soupcan" ? "fromMyself" : "";
  return (
    <div className={`IndividualMessage ${fromMyself}`}>
      <ol>
        <ul>{message}</ul>
        <ul>{username}</ul>
        <ul className="MessageTimeStamp">{postedDate.split("GMT")[0]}</ul>
      </ol>
    </div>
  );
};

export default Message;
