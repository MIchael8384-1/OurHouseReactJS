import React from "react";

const CurrentIssueCard = ({ issueName, issueLocation, issueDesc }) => {
  return (
    <li>
      <h3>This is an issue</h3>
      <p>Issue: {issueName}</p>
      <p>Location: {issueLocation}</p>
      <p>Description: {issueDesc}</p>
      <label htmlFor="issueImage">Upload an image for issue: </label>
      <input
        type="file"
        id="issueImage"
        name="issueImage"      />
      <button type="button">Delete issue</button>
    </li>
  );
};

export default CurrentIssueCard;
