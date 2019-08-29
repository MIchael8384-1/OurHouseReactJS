import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  font-size: 15px;
`;

const Message = ({ message, createdAt, username }) => {
  const postedDate = new Date(createdAt).toString();
  const fromMyself = username === "soupcan" ? "fromMyself" : "";
  return (
    <div className={`IndividualMessage ${fromMyself}`}>
      <ol>
        <Ul>{message}</Ul>
        <ul>{username}</ul>
        <ul className="MessageTimeStamp">{postedDate.split("GMT")[0]}</ul>
      </ol>
    </div>
  );
};

export default Message;
