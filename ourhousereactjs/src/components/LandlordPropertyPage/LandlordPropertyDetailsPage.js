import React, { Component } from "react";
import AddNewPropertyForm from "./AddNewPropertyForm";
import PropertiesDropdown from "./PropertiesDropdown";
import * as API from "../../api";
import ls from "local-storage";

class LandlordPropertyDetailsPage extends Component {
  state = {
    properties: []
  };

  render() {
    return (
      <div>
        <AddNewPropertyForm username={this.props.username} />
        {this.state.properties ? (
          <PropertiesDropdown propertyArray={this.state.properties} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.fetchProperties();
  }

  fetchProperties = () => {
    return API.getProperties()
      .then(properties => {
        console.log(properties);
        const filteredProperties = properties.filter(property => {
          return property.Username === ls.get("currentUsername");
        });
        console.log(filteredProperties);
        this.setState({ properties: filteredProperties });
      })
      .catch(console.log);
  };
}

export default LandlordPropertyDetailsPage;
