import React, { Component } from "react";
import SelectedTenant from "./SelectedTenant";

class TenantDropdown extends Component {
  state = {
    selectedTenant: null
  };

  render() {
    return (
      <div>
        <h1>View current tenant: </h1>
        <select onChange={this.handleChange}>
          <option hidden disabled selected value>
            Select an option
          </option>
          {this.props.tenantArray.map(tenant => {
            return (
              <option key={tenant.tenant_id} value={tenant.firstName}>
                {tenant.firstName}
              </option>
            );
          })}
        </select>
        {this.state.selectedTenant ? (
          <SelectedTenant
            selectedTenant={this.props.tenantArray.filter(tenant => {
              return tenant.firstName === this.state.selectedTenant;
            })}
          />
        ) : null}
      </div>
    );
  }
  handleChange = event => {
    this.setState({
      selectedTenant: event.target.value
    });
    console.log(event.target.value);
  };
}

export default TenantDropdown;
