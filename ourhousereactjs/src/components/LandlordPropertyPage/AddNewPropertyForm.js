import React, { Component } from "react";
import * as API from "../../api";
import ls from "local-storage";

import "./addNewProperty.css";

class AddNewPropertyForm extends Component {
  state = {
    PropertyName: "",
    Address: "",
    RentDueDate: "",
    RentAmount: 0
  };

  render() {
    const { PropertyName, Address, RentDueDate, RentAmount } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddNewPropForm">
        <h1>Add a new property: </h1>
        <h3>Property name: </h3>
        <input
          placeholder="1 Federation House"
          type="text"
          name="PropertyName"
          value={PropertyName}
          onChange={this.handleChange}
          className="addProperty-input"
        />
        <h3>Property Address: </h3>
        <input
          placeholder="Federation House, Federation St, Manchester M4 2AH"
          type="text"
          name="Address"
          value={Address}
          onChange={this.handleChange}
          className="addProperty-input"
        />
        <h3>Rent due date each month: </h3>
        <input
          placeholder="Rent is due on the 3rd of each month"
          type="text"
          name="RentDueDate"
          value={RentDueDate}
          onChange={this.handleChange}
          className="addProperty-input"
        />
        <h3>Rent amount per month: </h3>
        <input
          placeholder="£395"
          type="number"
          name="RentAmount"
          value={RentAmount}
          onChange={this.handleChange}
          className="addProperty-input"
        />
        <input type="submit" className="issue-btn prop-submit" />
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.postProperty();
    this.setState({
      PropertyName: "",
      Address: "",
      RentDueDate: "",
      RentAmount: 0
    });
  };

  postProperty = () => {
    const Username = ls.get("currentUsername");
    const { PropertyName, Address, RentDueDate, RentAmount } = this.state;
    const property = {
      Username,
      PropertyName,
      Address,
      RentDueDate,
      RentAmount
    };
    return API.postProperty(property)
      .then(property => {
        console.log(property);
      })
      .catch(console.log);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
}

export default AddNewPropertyForm;
