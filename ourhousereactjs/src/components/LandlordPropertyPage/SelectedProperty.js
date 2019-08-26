import React, { Component } from "react";
import TenantDropdown from "./TenantDropdown";
import AddNewTenantForm from "./AddNewTenantForm";

class SelectedProperty extends Component {
  state = {
    tenantArray: [
      {
        tenant_id: 1,
        firstName: "James",
        lastName: "Clegg",
        paidRent: true,
        monthsLeft: 8
      },
      {
        tenant_id: 2,
        firstName: "Alan",
        lastName: "Tong",
        paidRent: false,
        monthsLeft: 3
      }
    ]
  };

  render() {
    const {
      property_id,
      propertyName,
      address,
      rentDueDate,
      rentAmount
    } = this.props.selectedProperty[0];
    const dateLookup = {
      "1": "st",
      "2": "nd",
      "3": "rd",
      "4": "th",
      "5": "th",
      "6": "th",
      "7": "th",
      "8": "th",
      "9": "th",
      "0": "th"
    };
    return (
      <div>
        <h3>{propertyName}</h3>
        <p>Address: {address}</p>
        <p>
          Rent is due on: {rentDueDate}
          {dateLookup[rentDueDate.slice(-1)]} of each month
        </p>
        <p>Rent amount is: £{rentAmount}.00 per month</p>
        <AddNewTenantForm property_id={property_id} />
        <TenantDropdown tenantArray={this.state.tenantArray} />
      </div>
    );
  }
}

export default SelectedProperty;
