import React, { Component } from "react";
import AddNewPropertyForm from "./AddNewPropertyForm";
import PropertiesDropdown from "./PropertiesDropdown";
import Chatroom from "../messaging/Chatroom";
import * as API from "../../api";
import ls from "local-storage";
import TenantPropertyDetails from "../TenantPropertyDetails/TenantPropertyDetails";
import Donut from "../chart/Donut";

class LandlordPropertyDetailsPage extends Component {
  state = {
    properties: []
  };

  render() {
    return ls.get("currentUsername") === "soupcan" ? (
      <div className="DashboardGrid">
        <AddNewPropertyForm
          username={this.props.username}
          updateProperties={this.updateProperties}
        />
        {this.state.properties ? (
          <PropertiesDropdown propertyArray={this.state.properties} />
        ) : (
          <p>Loading</p>
        )}
        <Donut />
        <Chatroom />
      </div>
    ) : (
      <>
        <TenantPropertyDetails />
        <Donut />
        <Chatroom />
      </>
    );
  }

  componentDidMount() {
    this.fetchProperties();
  }

  // componentDidUpdate(prevProps, prevState) {}
  // }

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

  updateProperties = () => {
    console.log("HI");
    this.fetchProperties();
  };
}

export default LandlordPropertyDetailsPage;
