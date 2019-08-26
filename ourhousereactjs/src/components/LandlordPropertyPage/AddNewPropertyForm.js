import React, { Component } from "react";

class AddNewPropertyForm extends Component {
  state = {
    propertyName: "",
    address: "",
    rentDueDate: "",
    rentAmount: 0
  };

  render() {
    const { propertyName, address, rentDueDate, rentAmount } = this.state;
    return (
      <div>
        <h1>Add a new property: </h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Property name: </h3>
          <input
            type="text"
            name="propertyName"
            value={propertyName}
            onChange={this.handleChange}
          />
          <h3>Property address: </h3>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
          />
          <h3>Rent due date each month: </h3>
          <input
            type="text"
            name="rentDueDate"
            value={rentDueDate}
            onChange={this.handleChange}
          />
          <h3>Rent amount per month: </h3>
          <input
            type="number"
            name="rentAmount"
            value={rentAmount}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
}

export default AddNewPropertyForm;
