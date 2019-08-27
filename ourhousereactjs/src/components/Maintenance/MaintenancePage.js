import React, { Component } from "react";
import CurrentIssueCard from "./CurrentIssueCard";
import { Link } from "@reach/router";

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
        desc: "Fucking hell Jeremy this has been here for a month"
      }
    ],
    
  };

  render() {
  return (
    <div className="maintenance-page">
      <h1 className="maintenance-title">Maintenance</h1>
      <p>Here is a list of your current issues, be sure to message your landlord when you have uploaded a new issue!</p>
        <h2>Current issues</h2>
      <div className="maintenance-current-issues">
        
          {this.state.currentIssues.map(issue => {
            return (
              <CurrentIssueCard
                key={issue.issue_id}
                issue_id={issue.issue_id}
                {...issue}
              />
            );
          })}
          
          
       
      </div>
      <div className="add-item">
       
      <Link to="/maintenance/newissue"className="add-item-btn">add item</Link>
      </div>
      {/* <div>
        <h2>New issue</h2>
        <NewIssue rooms={this.state.rooms} username={this.state.user} />
      </div> */}
    </div>
  );
}
}

export default MaintenancePage;


// render() {
//   return (
//     <>
//       <h1>Maintenance</h1>
//       <div>
//         <h2>Current issues</h2>
//         <ul>
//           {this.state.currentIssues.map(issue => {
//             return (
//               <CurrentIssueCard
//                 key={issue.issue_id}
//                 issueName={issue.name}
//                 issueLocation={issue.location}
//                 issueDesc={issue.desc}
//               />
//             );
//           })}
//         </ul>
//       </div>
//       <div>
//         <h2>New issue</h2>
//         <NewIssue rooms={this.state.rooms} username={this.state.user} />
//       </div>
//     </>
//   );
// }