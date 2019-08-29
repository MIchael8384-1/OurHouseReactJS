import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import { Link } from "@reach/router";
import images from "./images";
import styled from "styled-components";
import "./maintenance.css";
import "./maintenance-btn.css";

const H2 = styled.h2`
  margin-left: 10px;
`;

class MaintenancePage extends Component {
  state = {
    user: null,
    houseID: null,
    currentIssues: [
      {
        issue_id: 1,
        name: "Mould behind/ next to radiator",
        location: "1D",
        desc: "large patch of mould in kitchen"
      },
      {
        issue_id: 2,
        name: "stained tiles in utility",
        location: "1F",
        desc: "damaged tiles in utility room"
      }
    ]
  };

  render() {
    return (
      <div className="maintenance-page">
        <h1 className="maintenance-title">Maintenance</h1>
        <p className="maintenance-subtext">
          Here is a list of your current issues, be sure to message your
          landlord when you have uploaded a new issue!
        </p>
        <H2>Current issues</H2>
        <div className="maintenance-current-issues">
          {this.state.currentIssues.map((issue, i) => {
            return (
              <CurrentIssueCard
                key={issue.issue_id}
                issue_id={issue.issue_id}
                {...issue}
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
}

export default MaintenancePage;
