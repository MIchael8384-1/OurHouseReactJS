import React, { Component } from "react";
import { Link } from "@reach/router";

class TenantPropertyDetails extends Component {
  state = {
    property: {
      address: "Federation House, Federation St, Manchester M4 2AH",
      landlord: "Jeremy Bennett",
      rentDueDate: "1",
      rentAmount: 400
    }
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
    const monthLengthLookup = {
      January: 31,
      February: 28,
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31
    };
    const today = new Date();
    const currentMonth =
      monthLookup[String(today.getMonth() + 1).padStart(2, "0")];
    const rentDueMonth =
      monthLookup[String(today.getMonth() + 2).padStart(2, "0")];
    console.log(rentDueMonth);
    const dd = String(today.getDate()).padStart(2, "0");
    const { address, landlord, rentDueDate, rentAmount } = this.state.property;
    return (
      <div>
        <h2>Your property</h2>
        <p>Your Address is: {address}</p>
        <p>Your landlord is: {landlord}</p>
        <p>
          Your rent is due on: {rentDueDate}
          {dateLookup[rentDueDate.slice(-1)]} of {rentDueMonth}
        </p>
        <p>
          Which is in:{" "}
          {rentDueDate > dd
            ? rentDueDate - dd
            : rentDueDate - dd + monthLengthLookup[currentMonth]}{" "}
          days
        </p>
        <p>Your rent due each month is: £{rentAmount}.00</p>
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
    );
  }
}

export default TenantPropertyDetails;
