import React from "react";
import TabbedLayout from "../../../components/Layout/Layout";
import Permissions from "./Permissions";

const PermissionsLayout = () => {
  const renderTabContents = [() => <Permissions />];
  return <TabbedLayout tabContentRenderers={renderTabContents} />;
};

export default PermissionsLayout;
