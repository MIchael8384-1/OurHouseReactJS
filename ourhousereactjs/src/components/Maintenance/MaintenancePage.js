import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import { Link } from "@reach/router";
import images from './images'

import './maintenance.css'
import './maintenance-btn.css'

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
        desc: "damp behind the sofa also"
      }
    ],
    
  };

  render() {
  return (
    <div className="maintenance-page">
      <h1 className="maintenance-title">Maintenance</h1>
      <p className="maintenance-subtext">Here is a list of your current issues, be sure to message your landlord when you have uploaded a new issue!</p>
        <h2>Current issues</h2>
      <div className="maintenance-current-issues">
        
          {this.state.currentIssues.map((issue,i) => {
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
       
      <Link to="/maintenance/newissue"className="add-item-btn">add item</Link>
      </div>
    
    </div>
  );
}
}

export default MaintenancePage;


