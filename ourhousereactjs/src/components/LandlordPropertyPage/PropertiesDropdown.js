import React, { Component } from "react";
import SelectedProperty from "./SelectedProperty";
import { navigate } from "@reach/router";
import "./propertiesDropDown.css";

class PropertiesDropdown extends Component {
  state = {
    selectedOption: null
  };

  render() {
    return (
      <div className="dashboard-view-property">
        <h2>View selected property: </h2>
        <select onChange={this.handleChange} className="view-property-select">
          <option hidden disabled selected value>
            Select an option
          </option>
          {this.props.propertyArray.map(property => {
            return (
              <option key={property.Property_id} value={property.PropertyName}>
                {property.PropertyName}
              </option>
            );
          })}
        </select>
        {this.state.selectedOption ? (
          <SelectedProperty
            selectedProperty={this.props.propertyArray.filter(property => {
              return property.PropertyName === this.state.selectedOption;
            })}
          />
        ) : null}
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
    // navigate("/addtenant");
  };

}

export default PropertiesDropdown;
