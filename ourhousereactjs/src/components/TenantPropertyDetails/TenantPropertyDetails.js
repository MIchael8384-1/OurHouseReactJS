import React, { Component } from "react";
import { Link } from "@reach/router";
import * as API from "../../api";
import ls from "local-storage";
import styled from "styled-components"
import "./tenantPropertyDetails.css"
import housepic from "../../media/housepic.png"


const H2 = styled.h2`
margin-top: 4em;
margin-left: 0.75em;
margin-bottom: -0.1em`;

const H4 = styled.h4`
margin-left: 1.2em;
margin-bottom: -0.1em`;

const Img = styled.img`
position: fixed;
bottom: 0;
left: 0;
width: 30em;
height: 22em;
margin-left: 1.2em`;

const Button = styled.button`
  border-radius: 30px;
  border: none;
  color: white;
  background-color: rgba(237, 49, 146, 1);
  width: 6em;
  height: 3em;
  font-size: 10px;
  font-family: Futura;
`;

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
        <H2>
          {this.state.tenant.FirstName} {this.state.tenant.Surname}
        </H2>
        <H4>{this.state.property.PropertyName}</H4>
        <div className="TenantDetailsSection">
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
            <Button>CLICK</Button>
          </Link>
        </p>
      </div>
      <Img src={housepic} alt="a house"/>
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
