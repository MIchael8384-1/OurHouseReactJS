import React, { Component } from "react";
import TenantDropdown from "./TenantDropdown";
import AddNewTenantForm from "./AddNewTenantForm";
import * as API from "../../api";

class SelectedProperty extends Component {
  state = {
    tenantArray: []
  };

  render() {
    const {
      PropertyName,
      Address,
      RentDueDate,
      RentAmount
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
        <h3>{PropertyName}</h3>
        <p>Address: {Address}</p>
        <p>
          Rent is due on: {RentDueDate}
          {dateLookup[RentDueDate.slice(-1)]} of each month
        </p>
        <p>Rent amount is: £{RentAmount}.00 per month</p>
        <AddNewTenantForm Address={Address} />
        {this.state.tenantArray ? (
          <TenantDropdown tenantArray={this.state.tenantArray} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }

  componentDidMount() {
    API.getTenants()
      .then(tenants => {
        const filteredTenants = tenants.filter(tenant => {
          return this.props.selectedProperty[0].Address === tenant.Address;
        });
        this.setState({ tenantArray: filteredTenants });
      })
      .catch(console.log);
  }
}

export default SelectedProperty;
