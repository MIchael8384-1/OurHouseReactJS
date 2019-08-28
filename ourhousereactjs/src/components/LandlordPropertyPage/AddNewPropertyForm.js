import React, { Component } from "react";
import * as API from "../../api";
import ls from "local-storage";

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
      <div className="AddNewPropForm">
        <h1>Add a new property: </h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Property name: </h3>
          <input
            type="text"
            name="PropertyName"
            value={PropertyName}
            onChange={this.handleChange}
          />
          <h3>Property Address: </h3>
          <input
            type="text"
            name="Address"
            value={Address}
            onChange={this.handleChange}
          />
          <h3>Rent due date each month: </h3>
          <input
            type="text"
            name="RentDueDate"
            value={RentDueDate}
            onChange={this.handleChange}
          />
          <h3>Rent amount per month: </h3>
          <input
            type="number"
            name="RentAmount"
            value={RentAmount}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ Username: ls.get("currentUsername") });
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
    const {
      Username,
      PropertyName,
      Address,
      RentDueDate,
      RentAmount
    } = this.state;
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
