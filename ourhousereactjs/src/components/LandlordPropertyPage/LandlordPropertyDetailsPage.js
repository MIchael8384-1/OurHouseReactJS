import React from "react";
import AddNewPropertyForm from "./AddNewPropertyForm";
import PropertiesDropdown from "./PropertiesDropdown";
import * as API from "../../api";
import ls from "local-storage";

class LandlordPropertyDetailsPage extends React.Component {
  state = {
    properties: []
  };

  render() {
    console.log("inside the landlord property details page");
    console.log(this.props);
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
    console.log("trying to render from login");
    this.fetchProperties();
  }

  fetchProperties = () => {
    const Username = ls.get("currentUsername");
    return API.getProperties(Username)
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
