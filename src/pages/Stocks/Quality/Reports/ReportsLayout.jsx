import React from "react";
import NavButton from "../../../../components/btn/NavButton";
import QualityReport from "./QualityReport";
import TabbedLayout from "../../../../components/Layout/Layout";

const ReportsLayout = () => {
  const renderButtons = [<NavButton name="Quality Report" />];
  const renderTabContents = [() => <QualityReport />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default ReportsLayout;
