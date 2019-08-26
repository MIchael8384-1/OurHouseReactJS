import React, { Component } from "react";
import AddNewPropertyForm from "./AddNewPropertyForm";
import PropertiesDropdown from "./PropertiesDropdown";

class LandlordPropertyDetailsPage extends Component {
  state = {
    properties: [
      {
        propertyName: "NorthCoders",
        address: "Federation House, Federation St, Manchester M4 2AH",
        rentDueDate: "15",
        rentAmount: 800
      },
      {
        propertyName: "FirstEnergy Stadium",
        address:
          "FirstEnergy Stadium, 100 Alfred Lerner Way, Cleveland, OH 44114, USA",
        rentDueDate: "20",
        rentAmount: 1000000
      }
    ]
  };

  render() {
    return (
      <div>
        <AddNewPropertyForm />
        <PropertiesDropdown propertyArray={this.state.properties} />
      </div>
    );
  }
}

export default LandlordPropertyDetailsPage;
