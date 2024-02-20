import React from "react";
import TabbedLayout from "../../../components/Layout/Layout";
import UserManager from "./UserManager";

const UserLayout = () => {
  const renderTabContents = [() => <UserManager />];
  return <TabbedLayout tabContentRenderers={renderTabContents} />;
};

export default UserLayout;
