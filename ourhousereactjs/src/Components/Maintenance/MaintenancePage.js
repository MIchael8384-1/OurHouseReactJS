import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import NewIssue from "./NewIssue";

class MaintenancePage extends Component {
  state = {
    user: null,
    houseID: null,
    currentIssues: [
      {
        issue_id: 1,
        name: "Stain on sofa",
        location: "1D",
        desc: "there is a big ass stain on the sofa arm"
      },
      {
        issue_id: 2,
        name: "damp on ceiling",
        location: "1F",
        desc: "Fucking hell Jeremy this has been here for a month"
      }
    ],
    rooms: [
      { name: "bedroom", room_id: 1 },
      { name: "lounge", room_id: 2 },
      { name: "kitchen", room_id: 3 }
    ]
  };

  render() {
    return (
      <>
        <h1>Maintenance</h1>
        <div>
          <h2>Current issues</h2>
          <ul>
            {this.state.currentIssues.map(issue => {
              return (
                <CurrentIssueCard
                  key={issue.issue_id}
                  issueName={issue.name}
                  issueLocation={issue.location}
                  issueDesc={issue.desc}
                />
              );
            })}
          </ul>
        </div>
        <div>
          <h2>New issue</h2>
          <NewIssue rooms={this.state.rooms} username={this.state.user} />
        </div>
      </>
    );
  }
}

export default MaintenancePage;
