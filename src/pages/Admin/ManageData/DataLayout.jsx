import React from "react";
import NavButton from "../../../components/btn/NavButton";
import TabbedLayout from "../../../components/Layout/Layout";
import OutturnStatus from "./OutturnStatus";
import SellableStatus from "./SellableStatus";
import WarrantHeight from "./WarrantHeight";
import ReverseBulk from "./ReverseBulk";

const DataLayout = () => {
  const renderButtons = [
    <NavButton name="OUTTURN STATUS" />,
    <NavButton name="ADJUST SELLABLE STATUS" />,
    <NavButton name="ADJUST WARRANT HEIGHT" />,
    <NavButton name="REVERSE BULK" />,
  ];
  const renderTabContents = [
    () => <OutturnStatus />,
    () => <SellableStatus />,
    () => <WarrantHeight />,
    () => <ReverseBulk />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default DataLayout;
