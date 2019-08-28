import React, { Component } from "react";
import { Link } from "@reach/router";
import * as API from "../../api";
import ls from "local-storage";

class TenantPropertyDetails extends Component {
  state = {
    property: null,
    tenant: null
  };

  render() {
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
    const monthLookup = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    };
    const today = new Date();
    const rentDueMonth =
      monthLookup[String(today.getMonth() + 2).padStart(2, "0")];

    return this.state.property ? (
      <div>
        <h3>
          {this.state.tenant.FirstName} {this.state.tenant.Surname}
        </h3>
        <h4>{this.state.property.PropertyName}</h4>
        <p>Your Address is: {this.state.tenant.Address}</p>
        <p>
          Your rent is due on: {this.state.property.RentDueDate}
          {dateLookup[this.state.property.RentDueDate.slice(-1)]} of{" "}
          {rentDueMonth}
        </p>
        <p>Your rent due each month is: £{this.state.tenant.RentAmount}.00</p>
        <p>Your tenancy expires on: {this.state.tenant.TenancyExpires}</p>
        <p>
          Need to log an issue?{" "}
          <Link to="/maintenance">
            <button>Log an issue</button>
          </Link>
        </p>
        <p>
          Need to message your landlord?{" "}
          <Link to="/messaging">
            <button>Message your landlord </button>
          </Link>
        </p>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }

  componentDidMount() {
    API.getTenants().then(tenants => {
      const filteredTenant = tenants.filter(tenant => {
        return tenant.Email === ls.get("Email");
      });
      API.getProperties()
        .then(properties => {
          const filteredProperty = properties.filter(property => {
            return property.Address === filteredTenant[0].Address;
          });
          this.setState({
            property: filteredProperty[0],
            tenant: filteredTenant[0]
          });
        })
        .catch(console.log);
    });
  }
}

export default TenantPropertyDetails;
