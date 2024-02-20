import React from "react";
import Contract from "./Contract";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";

const ContractLayout = () => {
  const renderButtons = [<NavButton name="CONTRACTS" />];
  const renderTabContents = [() => <Contract />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default ContractLayout;
