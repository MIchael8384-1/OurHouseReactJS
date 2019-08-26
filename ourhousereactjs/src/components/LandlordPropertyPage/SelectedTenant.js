import React, { Component } from "react";

class SelectedTenant extends Component {
  render() {
    const {
      firstName,
      lastName,
      paidRent,
      monthsLeft
    } = this.props.selectedTenant[0];
    return (
      <div>
        <h3>{firstName}</h3>
        <p>
          Full name: {firstName} {lastName}
        </p>
        <p>Have they paid rent? {paidRent ? <>Yes</> : <>No</>}</p>
        <p>Months left on contract: {monthsLeft}</p>
      </div>
    );
  }
}

export default SelectedTenant;
