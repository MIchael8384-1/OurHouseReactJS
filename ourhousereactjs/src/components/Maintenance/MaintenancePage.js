import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import { Link } from "@reach/router";
import images from "./images";
import * as API from "../../api";

import "./maintenance.css";
import "./maintenance-btn.css";

class MaintenancePage extends Component {
  state = {
    user: null,
    houseID: null,
    currentIssues: []
  };

  render() {
    return (
      <div className="maintenance-page">
        <h1 className="maintenance-title">Maintenance</h1>
        <p className="maintenance-subtext">
          Here is a list of your current issues, be sure to message your
          landlord when you have uploaded a new issue!
        </p>
        <h2>Current issues</h2>
        <div className="maintenance-current-issues">
          {this.state.currentIssues.map((issue, i) => {
            return (
              <CurrentIssueCard
                key={issue.Id}
                issue_id={issue.Id}
                name={issue.Issue}
                desc={issue.Description}
                location={issue.SelectedArea}
                room={issue.SelectedRoom}
                imageUrl={images[i]}
              />
            );
          })}
        </div>
        <div className="add-item">
          <Link to="/maintenance/newissue" className="add-item-btn">
            add item
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchMaintenance();
  }

  fetchMaintenance = () => {
    return API.getMaintenance()
      .then(issues => {
        const filteredIssues = issues.filter(issue => {
          return issue.Email === ls.get("Email");
        });
        this.setState({ currentIssues: filteredIssues });
      })
      .catch(console.log);
  };
}

export default MaintenancePage;
