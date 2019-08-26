import React, { Component } from "react";

class AddNewTenantForm extends Component {
  state = {
    selectedTenant: null,
    firstName: "",
    lastName: "",
    paidRent: false,
    monthsLeft: 0
  };

  render() {
    const { firstName, lastName, monthsLeft } = this.state;
    return (
      <div>
        <h1>Add a new tenant:</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>First name: </h3>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <h3>Last name: </h3>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <h3>Paid rent: </h3>
          Yes
          <input
            type="radio"
            name="paidRent"
            value={true}
            onChange={this.handleChange}
          />
          No
          <input
            type="radio"
            name="paidRent"
            value={false}
            onChange={this.handleChange}
          />
          <h3>Months left on contract: </h3>
          <input
            type="number"
            name="monthsLeft"
            value={monthsLeft}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
}

export default AddNewTenantForm;
