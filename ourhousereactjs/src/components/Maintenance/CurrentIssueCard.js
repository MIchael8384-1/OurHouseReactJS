import React from "react";

import "./currentIssueCard.css";

const CurrentIssueCard = ({ desc, issue_id, location, name, imageUrl }) => {
  console.log(desc);
  const style = {
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <article className="preview-item">
      <div className="preview-issue-card-header" style={style} />

      <div className="preview-card-body">
        <h2 className="preview-issue-title">{name}</h2>

        <div className="preview-issue-id">
          <p>issueLocation: {location}</p>
          <p className="preview-issue-desc">{desc}</p>
        </div>
      </div>
      <div className="preview-issue-card-footer">
        <span>#{issue_id}</span>
      </div>
    </article>
  );
};

export default CurrentIssueCard;

// return (
//   <li>
//     <h3>issue #{issue_id}</h3>
//     <p>Issue: {issueName}</p>
//     <p>Location: {issueLocation}</p>
//     <p>Description: {issueDesc}</p>
//     <label htmlFor="issueImage">Upload an image for issue: </label>
//     <input type="file" id="issueImage" name="issueImage" />
//     <button type="button">Delete issue</button>
//   </li>
// );
