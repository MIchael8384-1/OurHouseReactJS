import React, { Component } from "react";
import * as API from "../../api";

import './addNewTenant.css'

class AddNewTenantForm extends Component {
  state = {
    selectedTenant: null,
    FirstName: "",
    Surname: "",
    Email: "",
    RentAmount: 0,
    TenancyExpires: ""
  };

  render() {
    const {
      FirstName,
      Surname,
      Email,
      RentAmount,
      TenancyExpires
    } = this.state;
    return (
      <div>
        <h1>Add a new tenant:</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>First name: </h3>
          <input
            type="text"
            name="FirstName"
            value={FirstName}
            onChange={this.handleChange}
            className="addNewTenant-input"
          />
          <h3>Last name: </h3>
          <input
            type="text"
            name="Surname"
            value={Surname}
            onChange={this.handleChange}
            className="addNewTenant-input"
          />
          <h3>Email address</h3>
          <input
            type="text"
            name="Email"
            value={Email}
            onChange={this.handleChange}
            className="addNewTenant-input"
          />
          <h3>Rent amount: </h3>
          <input
            type="number"
            name="RentAmount"
            value={RentAmount}
            onChange={this.handleChange}
            className="addNewTenant-input"
          />
          <h3>When does the tenancy expire: </h3>
          <input
            type="text"
            name="TenancyExpires"
            value={TenancyExpires}
            onChange={this.handleChange}
            className="addNewTenant-input"
          />
          <br />
          <input type="submit" className="issue-btn addNewTenant-submit" />
        </form>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postTenant();
    this.setState({
      FirstName: "",
      Surname: "",
      RentAmount: 0,
      TenancyExpires: "",
      Email: ""
    });
  };

  postTenant = () => {
    const {
      FirstName,
      Surname,
      Email,
      RentAmount,
      TenancyExpires
    } = this.state;
    const { Address } = this.props;
    const tenant = {
      FirstName,
      Surname,
      Email,
      RentAmount,
      Address,
      TenancyExpires
    };
    return API.postTenant(tenant)
      .then(tenant => {
        console.log(tenant);
      })
      .catch(console.log);
  };
}

export default AddNewTenantForm;
