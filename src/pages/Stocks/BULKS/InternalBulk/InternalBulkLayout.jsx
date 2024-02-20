import React from "react";
import TabbedLayout from "../../../../components/Layout/Layout";
import InternalBulk from "./InternalBulk";
import ListBulks from "./ListBulks";
import NavButton from "../../../../components/btn/NavButton";

const InternalBulkLayout = () => {
  const renderButtons = [
    <NavButton name="BULK" />,
    <NavButton name="LIST BULKS" />,
  ];
  const renderTabContents = [() => <InternalBulk />, () => <ListBulks />];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default InternalBulkLayout;
