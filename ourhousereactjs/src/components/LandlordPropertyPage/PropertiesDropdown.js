import React, { Component } from "react";
import SelectedProperty from "./SelectedProperty";

class PropertiesDropdown extends Component {
  state = {
    selectedOption: null
  };

  render() {
    return (
      <div>
        <h1>View selected property: </h1>
        <select onChange={this.handleChange}>
          <option hidden disabled selected value>
            Select an option
          </option>
          {this.props.propertyArray.map(property => {
            return (
              <option key={property.property_id} value={property.propertyName}>
                {property.propertyName}
              </option>
            );
          })}
        </select>
        {this.state.selectedOption ? (
          <SelectedProperty
            selectedProperty={this.props.propertyArray.filter(property => {
              return property.propertyName === this.state.selectedOption;
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
  };
}

export default PropertiesDropdown;
