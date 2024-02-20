import React from "react";
import Agents from "./Agents";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";

const AgentsLayout = () => {
  const renderButtons = [<NavButton name="AgentsView" />];
  const renderTabContents = [() => <Agents />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default AgentsLayout;
