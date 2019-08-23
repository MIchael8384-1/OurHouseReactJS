import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import NewIssue from "./NewIssue";

class MaintenancePage extends Component {
  state = {
    user: null,
    houseID: null,
    currentIssues: [
      {
        name: "Stain on sofa",
        location: "1D",
        desc: "there is a big ass stain on the sofa arm"
      },
      {
        name: "damp on ceiling",
        location: "1F",
        desc: "Fucking hell Jeremy this has been here for a month"
      }
    ],
    rooms: ["bedroom", "lounge", "kitchen"]
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
