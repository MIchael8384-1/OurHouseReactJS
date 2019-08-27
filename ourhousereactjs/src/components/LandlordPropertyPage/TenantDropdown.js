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
              <option key={tenant.Tenant_id} value={tenant.FirstName}>
                {tenant.FirstName}
              </option>
            );
          })}
        </select>
        {this.state.selectedTenant ? (
          <SelectedTenant
            selectedTenant={this.props.tenantArray.filter(tenant => {
              return tenant.FirstName === this.state.selectedTenant;
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
