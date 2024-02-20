import React from "react";
import PerformQuality from "./PerformQuality";
import QualityList from "./QualityList";
import NavButton from "../../../../components/btn/NavButton";
import TabbedLayout from "../../../../components/Layout/Layout";

const OperationsLayout = () => {
  const renderButtons = [
    <NavButton name="PERFORM QUALITY" />,
    <NavButton name="QUALITY LIST" />,
  ];
  const renderTabContents = [() => <PerformQuality />, () => <QualityList />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default OperationsLayout;
