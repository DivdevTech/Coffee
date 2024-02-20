import React from "react";
import TabbedLayout from "../../../../components/Layout/Layout";
import ExternakBulk from "./ExternakBulk";
import ExternalListBulk from "./ExternalListBulk";
import NavButton from "../../../../components/btn/NavButton";

const ExternalBulkLayout = () => {
  const renderButtons = [
    <NavButton name="BULKS" />,
    <NavButton name="LIST BULKS" />,
  ];
  const renderTabContents = [
    () => <ExternakBulk />,
    () => <ExternalListBulk />,
  ];
  return (
    <TabbedLayout
      buttonRenderers={renderButtons}
      tabContentRenderers={renderTabContents}
    />
  );
};

export default ExternalBulkLayout;
