import React, { Component } from "react";

class SelectedTenant extends Component {
  render() {
    const {
      FirstName,
      Surname,
      Email,
      RentAmount,
      TenancyExpires
    } = this.props.selectedTenant[0];
    return (
      <div>
        <h3>{FirstName}</h3>
        <p>
          Full name: {FirstName} {Surname}
        </p>
        <p>Email: {Email}</p>
        <p>Tenancy expiry date: {TenancyExpires}</p>
        <p>Rent pcm: £{RentAmount}.00</p>
      </div>
    );
  }
}

export default SelectedTenant;
