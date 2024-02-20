import React from "react";
import LocationManager from "./LocationManager";
import TabbedLayout from "../../../components/Layout/Layout";

const LocationLayout = () => {
  const renderTabContents = [() => <LocationManager />];
  return <TabbedLayout tabContentRenderers={renderTabContents} />;
};

export default LocationLayout;
