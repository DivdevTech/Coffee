import React from "react";
import TabbedLayout from "../../../components/Layout/Layout";
import NavButton from "../../../components/btn/NavButton";
import MillingStatement from "./MillingStatement";
import OutturnDetails from "./OutturnDetails";
import CompareOutturn from "./CompareOutturn";

const OutturnLayout = () => {
  const renderButtons = [
    <NavButton name="MILLING STATEMENT" />,
    <NavButton name="OUTTURN DETAILS" />,
    <NavButton name="COMPARE GRN OUTTURN" />,
  ];
  const renderTabContents = [
    () => <MillingStatement />,
    () => <OutturnDetails />,
    () => <CompareOutturn />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default OutturnLayout;
